package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.ArticleDto;
import com.kxb.employmentServices.entity.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleService {

    Article getById(Long id);

    List<Article> getTop10Articles();

    Page<Article> page(Pageable pageable, String title);

    Article save(ArticleDto.SaveRequest request);

    Article update(Long id, ArticleDto.UpdateRequest request);

    List<Article> getAll();

    Article updateHits(Long id);
}
