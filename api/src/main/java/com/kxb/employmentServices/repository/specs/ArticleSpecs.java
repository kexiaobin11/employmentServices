package com.kxb.employmentServices.repository.specs;

import com.kxb.employmentServices.entity.Article;
import org.springframework.data.jpa.domain.Specification;

public class ArticleSpecs {

    static public Specification<Article> containingTitle(String title) {
        if (title != null) {
            return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like(root.get("title").as(String.class), String.format("%%%s%%", title));
        } else {
            return Specification.where(null);
        }
    }
}
