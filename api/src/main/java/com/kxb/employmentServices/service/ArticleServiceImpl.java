package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.ArticleDto;
import com.kxb.employmentServices.entity.Article;
import com.kxb.employmentServices.repository.ArticleRepository;
import com.kxb.employmentServices.repository.specs.ArticleSpecs;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public Article getById(Long id) {
        return this.articleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Article> getTop10Articles() {
        return this.articleRepository.findTop10ByOrderByIdDesc();
    }

    @Override
    public Page<Article> page(Pageable pageable, String title) {
        Specification<Article> specification = ArticleSpecs.containingTitle(title);
        return this.articleRepository.findAll(specification, pageable);
    }

    @Override
    public Article save(ArticleDto.SaveRequest request) {
        Article article = new Article();
        article.setTitle(request.getTitle());
        article.setContent(request.getContent());
        article.setDescription(request.getDescription());
        return this.articleRepository.save(article);
    }

    @Override
    public Article update(Long id, ArticleDto.UpdateRequest request) {
        Article article = this.articleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        article.setTitle(request.getTitle());
        article.setContent(request.getContent());
        article.setDescription(request.getDescription());
        return this.articleRepository.save(article);
    }

    @Override
    public List<Article> getAll() {
        return (List<Article>) this.articleRepository.findAll();
    }

    @Override
    public Article updateHits(Long id) {
        Article article = this.articleRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        article.setHits(article.getHits() + 1);
        return this.articleRepository.save(article);
    }

    @Override
    public void delete(Long id) {
        this.articleRepository.deleteById(id);
    }
}
