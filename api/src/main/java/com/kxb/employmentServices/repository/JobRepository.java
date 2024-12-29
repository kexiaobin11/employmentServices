package com.kxb.employmentServices.repository;

import com.kxb.employmentServices.entity.Job;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JobRepository extends CrudRepository<Job, Long>, JpaSpecificationExecutor<Job> {
    List<Job> findTop4ByOrderByIdDesc();
}
