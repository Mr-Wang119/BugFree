package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.service.MatchService;
import com.fouroneone.soccergod.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.fouroneone.soccergod.bean.UserInfo;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

// @RestController
@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.GET, value = "/homepage")
    public String homepage(Model model) {
        List<UserInfo> users = userService.getUserList();
        model.addAttribute("userList", users);
        return "homepage";
    }
    

    @ResponseBody
    @RequestMapping(value = "/")
    public Result homepage(HttpServletRequest request) {
       return new Result("homepage", true, null);
    }


    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Result login(HttpServletRequest request) {
        UserInfo user = new UserInfo();
        user.setUsername(request.getParameter("username"));
        user.setEmail(request.getParameter("email"));
        user.setPassword(request.getParameter("password"));
        Result result = userService.login(user);
        if (result.isSuccess()) {
            HttpSession session = request.getSession();
            session.setAttribute("username", ((UserInfo)result.getDetail()).getUsername());
        }
        return result;
    }

    @ResponseBody
    @RequestMapping(value = "/signup")
    public Result signUp(UserInfo user) {
        return userService.register(user);
    }

    @ResponseBody
    @RequestMapping(value = "/logout")
    public Result logout(HttpServletRequest request) {
        UserInfo user = new UserInfo();
        HttpSession session = request.getSession();
        user.setUsername((String)session.getAttribute("username"));
        session.removeAttribute("username");
        Result result = new Result("Logout success.", true, null);
        return result;
    }

    @ResponseBody
    @RequestMapping(value = "/status")
    public Result isSignin(HttpSession session) {
        Result result;
        if (session.getAttribute("username")==null) {
            result = new Result("logout", true, null);
        } else {
            result = new Result("login", true, session.getAttribute("username"));
        }
        return result;
    }


}
