package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
@ResponseBody
public class helloController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/help")
    public String test(){
        return userService.getUserInfoWithUin(10221083).getUsername();
//        return userService.test();
    }

}
