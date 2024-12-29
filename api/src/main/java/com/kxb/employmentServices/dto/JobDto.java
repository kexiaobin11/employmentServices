package com.kxb.employmentServices.dto;

import com.kxb.employmentServices.entity.IdDto;
import lombok.Data;
import lombok.EqualsAndHashCode;

public abstract class JobDto {
    @Data
    public static class SaveRequest {
        private String name;
        private String workPlace;

        private String requirement;

        private String description;

        private String minMonthSalary;

        private String maxMonthSalary;

        private String salaryDetail;

        private IdDto<Long> company;
    }

    @EqualsAndHashCode(callSuper = true)
    @Data
    public static class UpdateRequest extends SaveRequest {}
}
