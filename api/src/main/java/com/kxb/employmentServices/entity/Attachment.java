package com.kxb.employmentServices.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Attachment extends BaseEntity<Long> {
    /**
     * 附件原始名称
     */
    private String name;

    @ManyToOne
    @JoinColumn(nullable = false)
    @JsonView(MyFileJsonView.class)
    private MyFile file;

    /**
     * 附件扩展名
     */
    private String ext;

    public Attachment() {
    }

    public Attachment(Long id) {
        this.id = id;
    }

    public String getUrl() {
        if (this.file != null) {
            return "/" + this.file.getPath() + "/" + this.file.getName();
        } else {
            return "";
        }
    }

    public String getThumbnailUrl() {
        if (this.file != null && this.file.getThumbnail() != null) {
            return "/" + this.file.getThumbnail().getPath() + "/" + this.file.getThumbnail().getName();
        } else {
            return "";
        }
    }

    /**
     * 用于回传时做验证
     */
    public String getMd5() {
        if (this.file != null) {
            return this.file.getMd5();
        } else {
            return "";
        }
    }

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public interface MyFileJsonView {
    }
}
