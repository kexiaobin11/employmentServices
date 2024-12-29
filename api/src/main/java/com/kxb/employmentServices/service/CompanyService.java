package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.ArticleDto;
import com.kxb.employmentServices.dto.CompanyDto;
import com.kxb.employmentServices.entity.Article;
import com.kxb.employmentServices.entity.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CompanyService {

    Company getById(Long id);

    List<Company> getTo4Company();

    Page<Company> page(Pageable pageable, String name);

    Company save(CompanyDto.SaveRequest request);

    Company update(Long id, CompanyDto.UpdateRequest request);

    List<Company> getAll();
}
