package com.kxb.employmentServices.repository;

import com.kxb.employmentServices.entity.Company;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CompanyRepository extends CrudRepository<Company, Long>, JpaSpecificationExecutor<Company> {
    List<Company> findTop4ByOrderByIdDesc();
}
