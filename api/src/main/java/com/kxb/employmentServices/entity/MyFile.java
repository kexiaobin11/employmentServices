package com.kxb.employmentServices.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class MyFile extends BaseEntity<Long> {

    private String sha1;

    private String md5;

    /** 文件存储路径 */
    private String path;

    /** 文件存储名称 */
    private String name;

    /**
     * 文件MIME，对应文件类型
     */
    private String mime;

    /** 文件被引用次数 */
    private int quoteNumber;

    @OneToOne
    @JsonView(ThumbnailJsonView.class)
    private MyFile thumbnail;

    public String getContentType() {
        return this.mime;
    }

    public void setContentType(String contentType) {
        this.mime = contentType;
    }

    public interface ThumbnailJsonView {}
}
