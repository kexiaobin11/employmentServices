package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.Attachment;
import com.kxb.employmentServices.entity.MyFile;
import com.kxb.employmentServices.properties.AppProperties;
import com.kxb.employmentServices.repository.AttachmentRepository;
import com.kxb.employmentServices.repository.MyFileRepository;
import com.kxb.employmentServices.utils.Utils;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletResponse;
import net.coobird.thumbnailator.Thumbnails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.lang.NonNull;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AttachmentServiceImpl implements AttachmentService {

    private static final Logger logger = LoggerFactory.getLogger(AttachmentServiceImpl.class);

    final private MyFileRepository myFileRepository;
    final private AttachmentRepository attachmentRepository;
    final private MyFileService myFileService;

    final private AppProperties appProperties;

    public AttachmentServiceImpl(MyFileRepository myFileRepository,
                                 AttachmentRepository attachmentRepository,
                                 MyFileService myFileService, AppProperties appProperties) {
        this.myFileRepository = myFileRepository;
        this.attachmentRepository = attachmentRepository;
        this.myFileService = myFileService;

        this.appProperties = appProperties;
    }

    @Override
    public void download(Long id, String md5, HttpServletResponse response) {
        Attachment attachment = this.attachmentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("entity not found"));
        if (!attachment.getFile().getMd5().equals(md5)) {
            throw new EntityNotFoundException();
        }
        this.myFileService.download(attachment.getName(), attachment.getFile(), response);
    }

    @Override
    public void download(@NonNull Attachment attachment, OutputStream outputStream) {
        Assert.notNull(attachment.getFile(), "附件中的FILE不能为null");
        this.myFileService.download(attachment.getFile(), outputStream);
    }

    @Override
    public Attachment upload(MultipartFile multipartFile) throws Exception {
        String attachmentPath = this.appProperties.getAttachmentPath().endsWith("/") ?
                this.appProperties.getAttachmentPath() : this.appProperties.getAttachmentPath() + "/";
        Path saveFilePath = Paths.get(attachmentPath + this.getYearMonthDay());
        return this.saveAttachment(multipartFile, saveFilePath, false, null);
    }

    @Override
    public Attachment uploadImage(MultipartFile multipartFile) throws Exception {
        String attachmentPath = this.appProperties.getAttachmentPath().endsWith("/") ?
                this.appProperties.getAttachmentPath() : this.appProperties.getAttachmentPath() + "/";
        Path saveFilePath = Paths.get(attachmentPath + this.getYearMonthDay());
        MultipartFile thumbnail = this.createThumbnail(multipartFile);
        return this.saveAttachment(multipartFile, saveFilePath, false, thumbnail);
    }

    public Attachment getById(Long id) {
        return this.attachmentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("找不到相关附件"));
    }

    @Override
    public List<Attachment> getByIds(List<Long> ids) {
        List<Attachment> attachmentList = new ArrayList<>();
        for (Long id : ids) {
            attachmentList.add(this.getById(id));
        }
        return attachmentList;
    }

    @Override
    public Attachment saveAttachment(MultipartFile multipartFile, Path saveFilePath, Boolean useOriginNameSave, MultipartFile thumbnail) throws Exception {
        logger.debug("新建附件对象");
        Attachment attachment = new Attachment();

        logger.debug("获取文件名");
        String fileName = multipartFile.getOriginalFilename();

        logger.debug("从文件名中截取拓展名");
        // 从"."最后一次出现的位置的下一位开始截取，获取扩展名
        assert fileName != null;
        String ext = fileName.substring(fileName.lastIndexOf(".") + 1);

        logger.debug("对文件进行sha1,md5加密");
        String sha1ToMultipartFile = Utils.encrypt(multipartFile, "SHA-1");
        String md5ToMultipartFile = Utils.encrypt(multipartFile, "MD5");

        logger.debug("设置文件信息");
        attachment.setName(fileName);
        attachment.setExt(ext);

        MyFile oldFile = this.myFileRepository.findTopBySha1AndMd5(sha1ToMultipartFile, md5ToMultipartFile);
        // 判断是否保存file
        if (oldFile == null) {
            logger.debug("设置保存文件名");
            String saveName;
            if (useOriginNameSave) {
                saveName = fileName;
            } else {
                saveName = Utils.md5(md5ToMultipartFile + System.currentTimeMillis()) + "." + ext;
            }

            logger.debug("判断上传的文件是否为空");
            if (multipartFile.isEmpty()) {
                throw new RuntimeException("上传的附件不能为空" + fileName);
            }

            logger.debug("如果目录不存在，则创建目录。如果目录存在，则不创建");
            if (!Files.exists(saveFilePath)) {
                Files.createDirectories(saveFilePath);
                new File(saveFilePath.resolve("index.html").toString()).createNewFile();
            }

            logger.debug("将文件移动至储存文件的路径下");
            Files.copy(multipartFile.getInputStream(), saveFilePath.resolve(saveName),
                    StandardCopyOption.REPLACE_EXISTING);

            MyFile file = new MyFile();
            setMyFile(file, multipartFile, saveFilePath, sha1ToMultipartFile, md5ToMultipartFile, saveName);
            // 若缩略图存在， 保存缩略图
            if (thumbnail != null && !thumbnail.isEmpty()) {
                MyFile thumbnailFile = this.saveThumbnail(thumbnail, saveFilePath, Utils.md5(md5ToMultipartFile + System.currentTimeMillis()) + "-thumbnail" + "." + ext);
                file.setThumbnail(thumbnailFile);
            }

            oldFile = this.myFileRepository.save(file);
        } else {
            if (thumbnail != null && !thumbnail.isEmpty()) {
                MyFile thumbnailFile = this.saveThumbnail(thumbnail, Paths.get(oldFile.getPath()), Utils.md5(md5ToMultipartFile + System.currentTimeMillis()) + "-thumbnail" + "." + ext);
                oldFile.setThumbnail(thumbnailFile);
            }
            oldFile.setQuoteNumber(oldFile.getQuoteNumber() + 1);
            oldFile = this.myFileRepository.save(oldFile);
        }

        attachment.setFile(oldFile);
        this.attachmentRepository.save(attachment);
        return attachment;
    }

    private MyFile setMyFile(MyFile file, MultipartFile multipartFile, Path saveFilePath, String sha1ToMultipartFile, String md5ToMultipartFile, String saveName) {
        logger.debug("新建文件实体，并保存到数据库");
        file.setQuoteNumber(1);
        file.setName(saveName);
        file.setMime(multipartFile.getContentType());
        file.setPath(saveFilePath.toString());
        file.setSha1(sha1ToMultipartFile);
        file.setMd5(md5ToMultipartFile);
        return file;
    }

    /**
     * 返回当前时间的字符串信息
     */
    private String getYearMonthDay() {
        String pattern = "yyyyMMdd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        return simpleDateFormat.format(new Date());
    }

    private MyFile saveThumbnail(MultipartFile thumbnail, Path saveFilePath, String saveName) throws IOException {
        logger.debug("对文件进行sha1,md5加密");
        String sha1ToMultipartFile = Utils.encrypt(thumbnail, "SHA-1");
        String md5ToMultipartFile = Utils.encrypt(thumbnail, "MD5");

        Files.copy(thumbnail.getInputStream(), saveFilePath.resolve(saveName),
                StandardCopyOption.REPLACE_EXISTING);

        MyFile file = new MyFile();
        setMyFile(file, thumbnail, saveFilePath, sha1ToMultipartFile, md5ToMultipartFile, saveName);
        return this.myFileRepository.save(file);
    }

    public MultipartFile createThumbnail(MultipartFile originalFile) throws IOException {
        int targetWidth = 160;
        int targetHeight = 100;

        InputStream originalInputStream = originalFile.getInputStream();
        byte[] originalBytes = FileCopyUtils.copyToByteArray(originalInputStream);

        byte[] thumbnailBytes = generateThumbnail(originalBytes, targetWidth, targetHeight);

        String fileName = originalFile.getOriginalFilename();

        // 使用ByteArrayResource来包装缩略图数据
        ByteArrayResource resource = new ByteArrayResource(thumbnailBytes) {
            @Override
            public String getFilename() {
                return fileName;
            }
        };

        // 使用MockMultipartFile构建MultipartFile对象
        MultipartFile thumbnailFile = new MockMultipartFile("thumbnail", fileName, originalFile.getContentType(), resource.getInputStream());

        return thumbnailFile;
    }

    private byte[] generateThumbnail(byte[] originalBytes, int targetWidth, int targetHeight) throws IOException {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        Thumbnails.of(new ByteArrayInputStream(originalBytes))
                .size(targetWidth, targetHeight)
                .outputFormat("jpg")
                .toOutputStream(os);

        return os.toByteArray();
    }
}
