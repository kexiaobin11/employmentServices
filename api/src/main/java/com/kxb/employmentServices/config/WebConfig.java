package com.kxb.employmentServices.config;

import com.kxb.employmentServices.entity.User;
import com.kxb.employmentServices.filter.XAuthTokenAfterFilter;
import com.kxb.employmentServices.filter.XAuthTokenBeforeFilter;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebConfig implements WebMvcConfigurer {
    private final XAuthTokenBeforeFilter xAuthTokenBeforeFilter = new XAuthTokenBeforeFilter();
    private final XAuthTokenAfterFilter xAuthTokenAfterFilter = new XAuthTokenAfterFilter();
    private final BCryptPasswordEncoder passwordEncoder;


    public WebConfig() {
        this.passwordEncoder = new YzBCryptPasswordEncoder();
        User.setPasswordEncoder(passwordEncoder);
    }

    /**
     * 配置JsonView
     */
    @Bean
    public Jackson2ObjectMapperBuilderCustomizer jsonCustomizer() {
        return builder -> {
            builder.defaultViewInclusion(true);
        };
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        try {
            http
                    .csrf(csrf -> csrf.disable())  // 禁止csrf，否则在进行post等请求时，需要在传输数据中加签，后台会进行验签
                    .addFilterBefore(xAuthTokenBeforeFilter, BasicAuthenticationFilter.class)
                    .addFilterAfter(xAuthTokenAfterFilter, BasicAuthenticationFilter.class)
                    .authorizeHttpRequests(authorization ->
                            authorization
                                    .requestMatchers("/company/page").permitAll()
                                    .requestMatchers("/company/getTo4Company").permitAll()
                                    .requestMatchers("/company/getAll").permitAll()
                                    .requestMatchers("/company/{id}").permitAll()
                                    .requestMatchers("/job/page").permitAll()
                                    .requestMatchers("/job/getTo4Job").permitAll()
                                    .requestMatchers("/job/getAll").permitAll()
                                    .requestMatchers(HttpMethod.GET, "/job/{id}").permitAll()
                                    .requestMatchers("/article/page").permitAll()
                                    .requestMatchers("/article/getTop10Articles").permitAll()
                                    .requestMatchers(HttpMethod.GET, "/article/{id}").permitAll()
                                    .requestMatchers("/article/updateHits/{id}").permitAll()
                                    .anyRequest().authenticated()
                    )
                    .httpBasic(withDefaults()); // 启用HTTP基本认证
            return http.build();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * URL忽略大小写
     *
     * @param configurer 配置信息
     */
    @Override
    public void configurePathMatch(final PathMatchConfigurer configurer) {
        final AntPathMatcher pathMatcher = new AntPathMatcher();
        pathMatcher.setCaseSensitive(false);
        configurer.setPathMatcher(pathMatcher);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }

}
