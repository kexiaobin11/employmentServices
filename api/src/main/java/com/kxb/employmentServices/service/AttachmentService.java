package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.Attachment;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.OutputStream;
import java.nio.file.Path;
import java.util.List;

public interface AttachmentService {

    /**
     * 下载
     *
     * @param id       附件ID
     * @param md5      md5
     * @param response 响应
     */
    void download(Long id, String md5, HttpServletResponse response);

    /**
     * 下载
     * @param attachment 附件
     * @param outputStream 输出
     */
    void download(Attachment attachment, OutputStream outputStream);
    /**
     * 上传附件
     *
     * @param multipartFile 文件
     */
    Attachment upload(MultipartFile multipartFile) throws Exception;

    /**
     * 上传图片
     *
     * @param multipartFile 文件
     */
    Attachment uploadImage(MultipartFile multipartFile) throws Exception;

    /**
     * 保存上传的文件
     *
     * @param multipartFile     上传的文件
     * @param saveFilePath      文件保存路径
     * @param useOriginNameSave 是否使用文件原名存储
     * @param thumbnail         缩略图（文件为图片时）
     * @return 保存的附件实体
     */
    Attachment saveAttachment(MultipartFile multipartFile, Path saveFilePath, Boolean useOriginNameSave, MultipartFile thumbnail) throws Exception;

    /**
     * 根据id数组获取附件
     * @return 附件数组
     */
    List<Attachment> getByIds(List<Long> ids);
}