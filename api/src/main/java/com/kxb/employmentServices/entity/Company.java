package com.kxb.employmentServices.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Company extends BaseEntity<Long> {
    // 公司名称
    private String name;
    // 公司地址
    private String address;
    // 公司电话
    private String contactPhone;
    // 公司邮箱
    private String email;
    // 公司类型
    private String category;
    // 公司规模
    private String scale;
    // 公司介绍
    @Column(columnDefinition = "TEXT")
    private String introduction;
    // 公司描述
    private String description;
}
