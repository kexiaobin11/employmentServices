package com.kxb.employmentServices.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class YzBCryptPasswordEncoder extends BCryptPasswordEncoder {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public YzBCryptPasswordEncoder() {
        super();
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        if (rawPassword == null) {
            throw new IllegalArgumentException("rawPassword cannot be null");
        }

        return super.matches(rawPassword, encodedPassword);
    }
}
