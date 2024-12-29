package com.kxb.employmentServices.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.kxb.employmentServices.dto.ArticleDto;
import com.kxb.employmentServices.entity.Article;
import com.kxb.employmentServices.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("article")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping("/{id}")
    public Article getById(@PathVariable Long id) {
        return articleService.getById(id);
    }

    @GetMapping("/getTop10Articles")
    public List<Article> getTop10Articles() {
        return articleService.getTop10Articles();
    }

    @GetMapping("page")
    public Page<Article> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable,
                              @RequestParam(required = false) String title) {
        return articleService.page(pageable, title);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Article save(@RequestBody ArticleDto.SaveRequest request) {
        return articleService.save(request);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Article update(@PathVariable Long id, @RequestBody ArticleDto.UpdateRequest request) {
        return articleService.update(id, request);
    }

    @PutMapping("/updateHits/{id}")
    public Article updateHits(@PathVariable Long id) {
        return articleService.updateHits(id);
    }

    @GetMapping("/getAll")
    @JsonView(GetAllJsonView.class)
    public List<Article> getAll() {
        return articleService.getAll();
    }

    interface GetAllJsonView {}
}
