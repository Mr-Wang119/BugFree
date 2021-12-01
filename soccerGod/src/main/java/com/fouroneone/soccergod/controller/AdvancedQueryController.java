package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.AdvancedQuery1;
import com.fouroneone.soccergod.bean.AdvancedQuery2;
import com.fouroneone.soccergod.service.AdvancedQuery1Service;
import com.fouroneone.soccergod.service.AdvancedQuery2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@CrossOrigin(originPatterns = "*")
public class AdvancedQueryController {
    @Autowired
    AdvancedQuery2Service advancedQuery2Service;

    @Autowired
    AdvancedQuery1Service advancedQuery1Service;

    @RequestMapping(method = RequestMethod.GET, value = "/advanceQuery1")
    public String advanceQuery1(@RequestParam(value = "position", defaultValue = "") String position, Model model) {
        if(position != null) {
            List<AdvancedQuery1> data = advancedQuery1Service.getNumberByPositionName(position);
            model.addAttribute("data", data);
        } else {
            model.addAttribute("data", null);
        }
        return "advanceQuery1";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/advanceQuery2")
    public String advanceQuery2(Model model) {
        List<AdvancedQuery2> data = advancedQuery2Service.getResult(85, "1978-01-28");
        model.addAttribute("data", data);
        return "advanceQuery2";
    }
}
