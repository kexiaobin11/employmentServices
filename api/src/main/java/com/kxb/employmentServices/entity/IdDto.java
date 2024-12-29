package com.kxb.employmentServices.entity;


import jakarta.validation.constraints.NotNull;
import lombok.Getter;


@Getter
public class IdDto<T> {
    @NotNull
    private T id;

    public IdDto() {
    }

    public IdDto(T id) {
        this.id = id;
    }

    public void setId(T id) {
        this.id = id;
    }
}
