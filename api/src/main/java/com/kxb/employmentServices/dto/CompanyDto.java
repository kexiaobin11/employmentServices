package com.kxb.employmentServices.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

public abstract class CompanyDto {

    @Data
    public static class SaveRequest {
        private String name;
        private String description;
        private String address;
        private String contactPhone;
        private String email;
        private String category;
        private String scale;
        private String introduction;
    }

    @EqualsAndHashCode(callSuper = true)
    @Data
    public static class UpdateRequest extends SaveRequest {}
}
