package com.kxb.employmentServices.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collection;
import java.util.List;

@Table(
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"username", "deleteAt"})
        }
)
@NoArgsConstructor
@Entity
public class User extends BaseEntity<Long> implements UserDetails {

    public final static String ROLE_ADMIN = "ROLE_ADMIN"; //管理员
    public final static short ROLE_USER = 1; // 用户

    @Setter
    @Getter
    private String name;

    @JsonView(PasswordView.class)
    private String password;

    @JsonView(UsernameView.class)
    private String username;

    @Setter
    @Getter
    private String role = ROLE_ADMIN;

    public User(Long id) {
        this.id = id;
    }

    @Getter
    private static PasswordEncoder passwordEncoder;

    @Override
    @Transient
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.getRole()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    public static void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        User.passwordEncoder = passwordEncoder;
    }

    public void setPassword(String password) {
        if (User.passwordEncoder == null) {
            throw new RuntimeException("未设置User实体的passwordEncoder，请调用set方法设置");
        }
        this.password = User.passwordEncoder.encode(password);
    }

    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public interface PasswordView { }

    public interface UsernameView { }

}
