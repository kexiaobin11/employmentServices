package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.JobDto;
import com.kxb.employmentServices.entity.Company;
import com.kxb.employmentServices.entity.Job;
import com.kxb.employmentServices.repository.CompanyRepository;
import com.kxb.employmentServices.repository.JobRepository;
import com.kxb.employmentServices.repository.specs.JobSpecs;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    private final JobRepository jobRepository;
    private final CompanyService companyService;

    public JobServiceImpl(JobRepository jobRepository, CompanyService companyService) {
        this.jobRepository = jobRepository;
        this.companyService = companyService;
    }

    @Override
    public Job getById(Long id) {
        return this.jobRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public List<Job> getTo4Job() {
        return this.jobRepository.findTop4ByOrderByIdDesc();
    }

    @Override
    public Page<Job> page(Pageable pageable, String name) {
        Specification<Job> specification = JobSpecs.containingName(name);
        return this.jobRepository.findAll(specification, pageable);
    }

    @Override
    public Job save(JobDto.SaveRequest request) {
        Job job = new Job();
        job.setName(request.getName());
        job.setCompany(this.companyService.getById(request.getCompany().getId()));
        job.setRequirement(request.getRequirement());
        job.setDescription(request.getDescription());
        job.setMaxMonthSalary(request.getMaxMonthSalary());
        job.setMinMonthSalary(request.getMinMonthSalary());
        job.setSalaryDetail(request.getSalaryDetail());
        job.setWorkPlace(request.getWorkPlace());
        return this.jobRepository.save(job);
    }

    @Override
    public Job update(Long id, JobDto.UpdateRequest request) {
        Job job = this.getById(id);
        job.setName(request.getName());
        job.setCompany(this.companyService.getById(request.getCompany().getId()));
        job.setRequirement(request.getRequirement());
        job.setDescription(request.getDescription());
        job.setMaxMonthSalary(request.getMaxMonthSalary());
        job.setMinMonthSalary(request.getMinMonthSalary());
        job.setSalaryDetail(request.getSalaryDetail());
        job.setWorkPlace(request.getWorkPlace());
        return this.jobRepository.save(job);
    }

    @Override
    public List<Job> getAll() {
        return (List<Job>) this.jobRepository.findAll();
    }
}
