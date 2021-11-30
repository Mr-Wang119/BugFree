package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CompetitionController {
    @Autowired
    private CompetitionService competitionService;

    @RequestMapping(method = RequestMethod.GET, value = "/recentCompetition")
    @ResponseBody
    public List<CompetitionWithCompete> getRecentCompetition(HttpServletRequest request) {
        int num = Integer.parseInt(request.getParameter("num"));
        System.out.println("RecentCompetition"+num);
        List<CompetitionWithCompete> competitions = competitionService.findRecentCompetitions(num);
        return competitions;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/match/{id}")
    @ResponseBody
    public Result competitionDetailInfoById(@PathVariable Integer id) {
        CompetitionWithCompete competition = competitionService.findById(id);
        Result result = new Result();
        if (competition == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
        } else {
            result.setSuccess(true);
            result.setDetail(competition);
            result.setMsg("");
        }
        return result;
    }

}
