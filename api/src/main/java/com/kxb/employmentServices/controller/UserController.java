package com.kxb.employmentServices.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.kxb.employmentServices.entity.User;
import com.kxb.employmentServices.filter.XAuthTokenBeforeFilter;
import com.kxb.employmentServices.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("login")
    @JsonView(LoginJsonView.class)
    User login(Principal principal) {
        return this.userService.findByUsername(principal.getName());
    }

    @GetMapping("currentLoginUser")
    @JsonView(GetCurrentLoginUserJsonView.class)
    public User getCurrentLoginUser(Principal principal) {
        User user = principal == null ? null : this.userService.getCurrentLoginUser().get();
        if (user != null) {
            user = this.userService.findById(user.getId());
        }
        return user;
    }

    @GetMapping("logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null) {
            new SecurityContextLogoutHandler().logout(request, response, authentication);
        }
        String token = request.getHeader("x-auth-token");
        XAuthTokenBeforeFilter.map.remove(token);
    }

    public interface LoginJsonView extends GetCurrentLoginUserJsonView {
    }

    public interface GetCurrentLoginUserJsonView extends User.UsernameView {
    }
}
