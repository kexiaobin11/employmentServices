package com.kxb.employmentServices;

import com.kxb.employmentServices.repository.SoftDeleteRepositoryFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(value = "com.kxb.employmentServices", repositoryFactoryBeanClass = SoftDeleteRepositoryFactoryBean.class)
public class EmploymentServicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmploymentServicesApplication.class, args);
    }

}
