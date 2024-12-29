package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.User;

import java.util.Optional;

public interface UserService {
    /**
     * 获取登录用户
     *
     * @return 登录用户 | null
     */
    Optional<User> getCurrentLoginUser();

    User findByUsername(String username);

    User findById(Long id);
}
