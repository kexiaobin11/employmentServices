package com.kxb.employmentServices.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Job extends BaseEntity<Long> {
    private String name;

    private String workPlace;

    private String requirement;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String minMonthSalary;

    private String maxMonthSalary;

    private String salaryDetail;

    @ManyToOne
    @JsonView(CompanyJsonView.class)
    private Company company;

    interface CompanyJsonView {}
}

