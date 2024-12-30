package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.CompanyDto;
import com.kxb.employmentServices.entity.Company;
import com.kxb.employmentServices.repository.CompanyRepository;
import com.kxb.employmentServices.repository.specs.CompanySpecs;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public Company getById(Long id) {
        return this.companyRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Company> getTo4Company() {
        return this.companyRepository.findTop4ByOrderByIdDesc();
    }

    @Override
    public Page<Company> page(Pageable pageable, String name) {
        Specification<Company> specification = CompanySpecs.containingName(name);
        return this.companyRepository.findAll(specification, pageable);
    }

    @Override
    public Company save(CompanyDto.SaveRequest request) {
        Company company = new Company();
        company.setName(request.getName());
        company.setAddress(request.getAddress());
        company.setDescription(request.getDescription());
        company.setEmail(request.getEmail());
        company.setCategory(request.getCategory());
        company.setContactPhone(request.getContactPhone());
        company.setIntroduction(request.getIntroduction());
        company.setScale(request.getScale());
        return this.companyRepository.save(company);
    }

    @Override
    public Company update(Long id, CompanyDto.UpdateRequest request) {
        Company company = this.getById(id);
        request.setName(company.getName());
        company.setAddress(request.getAddress());
        company.setDescription(request.getDescription());
        company.setEmail(request.getEmail());
        company.setCategory(request.getCategory());
        company.setContactPhone(request.getContactPhone());
        company.setIntroduction(request.getIntroduction());
        company.setScale(request.getScale());
        return this.companyRepository.save(company);
    }

    @Override
    public List<Company> getAll() {
        return (List<Company>) this.companyRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        this.companyRepository.deleteById(id);
    }
}
