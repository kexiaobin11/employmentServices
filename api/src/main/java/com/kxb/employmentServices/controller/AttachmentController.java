package com.kxb.employmentServices.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.kxb.employmentServices.entity.Attachment;
import com.kxb.employmentServices.entity.MyFile;
import com.kxb.employmentServices.service.AttachmentService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

@RestController
@RequestMapping("attachment")
public class AttachmentController {
    private final AttachmentService attachmentService;

    public AttachmentController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @PostMapping("upload")
    @JsonView(UploadJsonView.class)
    public Attachment upload(@RequestParam("file")MultipartFile multipartFile) throws Exception {
        return this.attachmentService.upload(multipartFile);
    }

    /**
     * 上传文件
     *
     * @param multipartFile 附件
     * @return 上传附件结果
     */
    @PostMapping("uploadImage")
    @JsonView(UploadJsonView.class)
    public Attachment uploadImage(@RequestParam("file") MultipartFile multipartFile) throws Exception {
        return this.attachmentService.uploadImage(multipartFile);
    }

    @GetMapping({"download/{id}/{md5}",})
    public void download(@PathVariable Long id,
                         @PathVariable String md5,
                         @RequestParam(required = false) String filename,
                         HttpServletResponse response)
            throws UnsupportedEncodingException {
        if (filename != null) {
            response.setHeader("Content-disposition", "attachment; filename=" +
                    URLEncoder.encode(filename, "UTF-8"));
        }
        this.attachmentService.download(id, md5, response);
    }

    @GetMapping({"getAttachmentByIds"})
    @JsonView(getByIdsJsonView.class)
    public List<Attachment> getAttachmentByIds(@RequestParam List<Long> attachmentIds) {
        return this.attachmentService.getByIds(attachmentIds);
    }

    interface getByIdsJsonView extends Attachment.MyFileJsonView, MyFile.ThumbnailJsonView {
    }

    interface UploadJsonView extends Attachment.MyFileJsonView, MyFile.ThumbnailJsonView {
    }
}
