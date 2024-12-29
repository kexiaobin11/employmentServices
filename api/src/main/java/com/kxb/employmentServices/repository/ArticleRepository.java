package com.kxb.employmentServices.repository;

import com.kxb.employmentServices.entity.Article;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ArticleRepository extends CrudRepository<Article, Long>, JpaSpecificationExecutor<Article> {
    List<Article> findTop10ByOrderByIdDesc();
}
