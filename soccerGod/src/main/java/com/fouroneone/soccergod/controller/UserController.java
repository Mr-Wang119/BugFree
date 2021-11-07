package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/login")
    public Result login(HttpServletRequest request) {
        UserInfo user = new UserInfo();
        user.setUsername(request.getParameter("username"));
        user.setEmail(request.getParameter("email"));
        user.setPassword(request.getParameter("password"));
        Result result = userService.login(user);
        if (result.isSuccess()) {
            HttpSession session = request.getSession();
            session.setAttribute("uin", ((UserInfo)result.getDetail()).getUin());
        }
        return result;
    }

    @RequestMapping(value = "/signup")
    public Result signUp(UserInfo user) {
        return userService.register(user);
    }

    @RequestMapping(value = "/logout")
    public Result logout(HttpServletRequest request) {
        UserInfo user = new UserInfo();
        HttpSession session = request.getSession();
        user.setUin((int)session.getAttribute("uin"));
        session.removeAttribute("uin");
        Result result = new Result("Logout success.", true, null);
        return result;
    }

    @RequestMapping(value = "/status")
    public Result isSignin(HttpSession session) {
        Result result;
        if (session.getAttribute("uin")==null) {
            result = new Result("logout", true, null);
        } else {
            result = new Result("login", true, session.getAttribute("uin"));
        }
        return result;
    }


}
