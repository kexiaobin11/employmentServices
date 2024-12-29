package com.kxb.employmentServices.exception;


public class AuthUserTypeNotSupportException extends RuntimeException {
    public AuthUserTypeNotSupportException() {
        super();
    }

    public AuthUserTypeNotSupportException(String message) {
        super(message);
    }
}
