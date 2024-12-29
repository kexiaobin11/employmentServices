package com.kxb.employmentServices.service;

import com.kxb.employmentServices.dto.CompanyDto;
import com.kxb.employmentServices.dto.JobDto;
import com.kxb.employmentServices.entity.Company;
import com.kxb.employmentServices.entity.Job;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface JobService {

    Job getById(Long id);

    List<Job> getTo4Job();

    Page<Job> page(Pageable pageable, String name);

    Job save(JobDto.SaveRequest request);

    Job update(Long id, JobDto.UpdateRequest request);

    List<Job> getAll();
}
