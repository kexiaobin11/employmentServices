package com.kxb.employmentServices.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Article extends BaseEntity<Long> {
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String description;

    private Long hits = 0L;
}
