package com.kxb.employmentServices.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

public abstract class ArticleDto {

    @Data
    public static class SaveRequest {
        private String title;
        private String content;
        private String description;
    }

    @EqualsAndHashCode(callSuper = true)
    @Data
    public static class UpdateRequest extends SaveRequest {
    }
}
