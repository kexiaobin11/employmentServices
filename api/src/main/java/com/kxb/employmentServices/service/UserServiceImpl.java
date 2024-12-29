package com.kxb.employmentServices.service;

import com.kxb.employmentServices.entity.User;
import com.kxb.employmentServices.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> getCurrentLoginUser() {
        logger.debug("初始化用户");
        Object user = null;

        logger.debug("获取用户认证信息");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        logger.debug("根据认证信息查询用户");
        if (authentication != null && authentication.isAuthenticated()) {
            try {
                user = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                if (user instanceof User) {
                    return Optional.of((User) user);
                }
            } catch (Exception e) {
                logger.error("在获取authUser时发生了异常，请确认loadUserByUsername方法返回的类型是否为AuthUser");
                throw e;
            }
        }
        return Optional.empty();
    }

    @Override
    public User findByUsername(String username) {
        return this.userRepository.findByUsername(username).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public User findById(Long id) {
        return this.userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("用户不存在"));
    }
}
