package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.CompetitionWithCompete;
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
        System.out.println(num);
        List<CompetitionWithCompete> competitions = competitionService.findRecentCompetitions(num);
        return competitions;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/competitionDetailInfoById")
    @ResponseBody
    public String competitionDetailInfoById(HttpServletRequest request) {
        int mid = Integer.parseInt(request.getParameter("mid"));
        System.out.println(mid);
        CompetitionWithCompete competitionTemp = competitionService.findById(mid);
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("mid",competitionTemp.getMid());
        jsonObject.put("hostScore",competitionTemp.getHostScore());
        jsonObject.put("hostName",competitionTemp.getHostName());
        jsonObject.put("guestName",competitionTemp.getGuestName());
        jsonObject.put("guestScore",competitionTemp.getGuestScore());
        jsonObject.put("hostTeamId",competitionTemp.getHostTeamId());
        jsonObject.put("guestTeamId",competitionTemp.getGuestTeamId());
        jsonObject.put("hostUrl",competitionTemp.getHostUrl());
        jsonObject.put("guestUrl",competitionTemp.getGuestUrl());
        jsonObject.put("time",competitionTemp.getTime());
        jsonObject.put("finish",competitionTemp.getFinish());
        jsonObject.put("name",competitionTemp.getName());
        jsonObject.put("location",competitionTemp.getLocation());
        jsonObject.put("pondAmount",competitionTemp.getPondAmount());

        return jsonObject.toString();

    }

}
