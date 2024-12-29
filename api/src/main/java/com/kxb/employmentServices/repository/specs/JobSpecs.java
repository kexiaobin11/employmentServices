package com.kxb.employmentServices.repository.specs;

import com.kxb.employmentServices.entity.Company;
import com.kxb.employmentServices.entity.Job;
import org.springframework.data.jpa.domain.Specification;

public class JobSpecs {

    static public Specification<Job> containingName(String name) {
        if (name != null) {
            return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("name").as(String.class), String.format("%%%s%%", name));
        } else {
            return Specification.where(null);
        }
    }
}
