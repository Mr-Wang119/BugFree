package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
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
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(method = RequestMethod.GET, value = "/homepage")
    public String homepage(Model model) {
        List<UserInfo> users = userService.getUserList();
        model.addAttribute("userList", users);
        return "homepage";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/login")
    public String login() {
        return "login";
    }


    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public String checkLogin(@RequestParam("username") String username, @RequestParam("password") String password, Model model) {
        UserInfo user = userService.getUserInfoWithUsername(username);
        if (user == null || !user.getPassword().equals(password)) {
            model.addAttribute("error", "username or password error!");
            return "login";
        }
        model.addAttribute("user", user);
        return "user";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/signup")
    public String signup() {
        return "signup";
    }

    private boolean checkNewUserFormat(UserInfo newUser, String confirm) {
        if(newUser.getUsername() == null || newUser.getPassword() == null || confirm == null || newUser.getEmail() == null || newUser.getBirthday() == null) {
            return false;
        }
        if (!newUser.getPassword().equals(confirm)) {
            return false;
        }
        UserInfo user = userService.getUserInfoWithUsername(newUser.getUsername());
        if (user != null) {
            return false;
        }
        user = userService.getUserInfoWithEmail(newUser.getEmail());
        if (user != null) {
            return false;
        }
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    // TODO: birthday format 2021-11-7 -> 11/7/2021
    public String checkSignup(UserInfo newUser, @RequestParam("passwordConfirm") String confirm, Model model) {
        if (!checkNewUserFormat(newUser, confirm)) {
            model.addAttribute("error", "Format error!");
            return "signup";
        }
        userService.addUser(newUser); // -> error, no 'info' getter setter
        model.addAttribute("user", newUser);
        return "user";
    }


    @RequestMapping(method = RequestMethod.GET, value = "/delete")
    public RedirectView deleteUser(@RequestParam("deleteID") Integer id) {
        userService.deleteUserWithUin(id);
        RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
        redirectView.setUrl("homepage");
        return redirectView;
    }


    @RequestMapping(method = RequestMethod.GET, value = "/edit")
    public String editUser(@RequestParam("editID") Integer id, Model model) {
        UserInfo user = userService.getUserInfoWithUin(id);
        model.addAttribute("user", user);
        return "edit";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/update")
    public RedirectView updateUser(UserInfo userInfo, Model model) {
        userService.updateUser(userInfo);
        RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
        redirectView.setUrl("homepage");
        return redirectView;
    }


//    @ResponseBody
//    @RequestMapping(value = "/login")
//    public Result login(HttpServletRequest request) {
//        UserInfo user = new UserInfo();
//        user.setUsername(request.getParameter("username"));
//        user.setEmail(request.getParameter("email"));
//        user.setPassword(request.getParameter("password"));
//        Result result = userService.login(user);
//        if (result.isSuccess()) {
//            HttpSession session = request.getSession();
//            session.setAttribute("uin", ((UserInfo)result.getDetail()).getUin());
//        }
//        return result;
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/signup")
//    public Result signUp(UserInfo user) {
//        return userService.register(user);
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/logout")
//    public Result logout(HttpServletRequest request) {
//        UserInfo user = new UserInfo();
//        HttpSession session = request.getSession();
//        user.setUin((int)session.getAttribute("uin"));
//        session.removeAttribute("uin");
//        Result result = new Result("Logout success.", true, null);
//        return result;
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/status")
//    public Result isSignin(HttpSession session) {
//        Result result;
//        if (session.getAttribute("uin")==null) {
//            result = new Result("logout", true, null);
//        } else {
//            result = new Result("login", true, session.getAttribute("uin"));
//        }
//        return result;
//    }


}
