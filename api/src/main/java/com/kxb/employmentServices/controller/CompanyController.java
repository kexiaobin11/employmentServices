package com.kxb.employmentServices.controller;

import com.kxb.employmentServices.dto.CompanyDto;
import com.kxb.employmentServices.entity.Company;
import com.kxb.employmentServices.service.CompanyService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/{id}")
    public Company getById(@PathVariable Long id) {
        return companyService.getById(id);
    }

    @GetMapping("/getTo4Company")
    public List<Company> getTop4Company() {
        return companyService.getTo4Company();
    }

    @GetMapping("/page")
    public Page<Company> page(@SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC)) Pageable pageable, @RequestParam(required = false) String name) {
        return companyService.page(pageable, name);
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Company save(@RequestBody CompanyDto.SaveRequest request) {
        return companyService.save(request);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public Company update(@PathVariable Long id, @RequestBody CompanyDto.UpdateRequest request) {
        return companyService.update(id, request);
    }

    @GetMapping("/getAll")
    public List<Company> getAll() {
        return companyService.getAll();
    }
}