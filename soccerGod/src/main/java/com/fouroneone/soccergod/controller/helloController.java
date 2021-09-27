package com.fouroneone.soccergod.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
@ResponseBody
public class helloController {
    @RequestMapping(value = "/help")
    public String test(){
        return "index1";
    }

}
