package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.GuessService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class CompetitionController {
    @Autowired
    private CompetitionService competitionService;
    @Autowired
    private GuessService guessService;

    @RequestMapping(method = RequestMethod.GET, value = "/recentCompetition")
    @ResponseBody
    public List<CompetitionWithCompete> getRecentCompetition(HttpServletRequest request) {
        int num = Integer.parseInt(request.getParameter("num"));
        List<CompetitionWithCompete> competitions = competitionService.findRecentCompetitions(num);
        return competitions;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/match/{id}")
    @ResponseBody
    public Result competitionDetailInfoById(@PathVariable Integer id, HttpServletRequest request) {
        CompetitionWithCompete competition = competitionService.findById(id);
        String username = (String) request.getSession().getAttribute("username");
        Integer hostwin = guessService.isGuess(id, username);
        Result result = new Result();
        if (competition == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
            return result;
        }
        // ?????????1????????????, -1????????????
        Integer hostPond = guessService.getHostGuestPond(id, 1);
        Integer guestPond = guessService.getHostGuestPond(id, -1);
        JSONObject jsonObject=new JSONObject();
        jsonObject.put("hostwin", hostwin);
        jsonObject.put("mid",competition.getMid());
        jsonObject.put("hostScore",competition.getHostScore());
        jsonObject.put("hostName",competition.getHostName());
        jsonObject.put("guestName",competition.getGuestName());
        jsonObject.put("guestScore",competition.getGuestScore());
        jsonObject.put("hostTeamId",competition.getHostTeamId());
        jsonObject.put("guestTeamId",competition.getGuestTeamId());
        jsonObject.put("hostUrl",competition.getHostUrl());
        jsonObject.put("guestUrl",competition.getGuestUrl());
        jsonObject.put("time",competition.getTime());
        jsonObject.put("finish",competition.getFinish());
        jsonObject.put("name",competition.getName());
        jsonObject.put("location",competition.getLocation());
        jsonObject.put("pondAmount",competition.getPondAmount());
        jsonObject.put("hostPond", hostPond);
        jsonObject.put("guestPond", guestPond);
        result.setSuccess(true);
        result.setDetail(jsonObject);
        result.setMsg("");
        return result;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/match")
    @ResponseBody
    public Result getMatch() {
        Result result = new Result();
        List<CompetitionWithCompete> pending = competitionService.getMatchPending();
        List<CompetitionWithCompete> finished = competitionService.getMatchFinished();
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("pending", pending);
        jsonObject.put("finished", finished);
        result.setSuccess(true);
        result.setMsg("");
        result.setDetail(jsonObject);
        return result;
    }
}
