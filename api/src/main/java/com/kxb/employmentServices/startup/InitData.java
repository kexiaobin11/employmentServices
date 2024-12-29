package com.kxb.employmentServices.startup;

import com.kxb.employmentServices.entity.User;
import com.kxb.employmentServices.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;

@Component
public class InitData implements ApplicationListener<ContextRefreshedEvent>, Ordered {
    public static int order = 1;
    private final Logger logger = LoggerFactory.getLogger(InitData.class);
    private final UserRepository userRepository;

    public InitData(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        if (this.userRepository.count() == 0) {
            logger.info("user表中没有数据，初始化用户");
            User user = new User();
            user.setUsername("13920618851");
            user.setPassword("yunzhi");
            user.setRole(User.ROLE_ADMIN);
            this.userRepository.save(user);
        }
    }

    @Override
    public int getOrder() {
        return order;
    }
}