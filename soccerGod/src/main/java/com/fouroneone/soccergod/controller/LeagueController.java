package com.fouroneone.soccergod.controller;

import com.alibaba.fastjson.JSONObject;
import com.fouroneone.soccergod.bean.League;
import com.fouroneone.soccergod.bean.LeagueDetail;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.service.LeagueDetailService;
import com.fouroneone.soccergod.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class LeagueController {
    @Autowired
    private LeagueService leagueService;

    @Autowired
    private LeagueDetailService leagueDetailService;

    @ResponseBody
    @RequestMapping(value = "/league", method = RequestMethod.GET)
    public Result listLeague() {
        Result result = new Result();
        List<League> leagues = leagueService.getAllLeague();
        result.setDetail(leagues);
        result.setSuccess(true);
        result.setMsg("");
        return result;
    }

    @ResponseBody
    @RequestMapping(value = "/league/{id}", method = RequestMethod.GET)
    public Result leagueDetail(@PathVariable Integer id) {
        Result result = new Result();
        List<LeagueDetail> leagueDetail = leagueDetailService.getLeagueDetailByLeagueID(id);
        JSONObject json=new JSONObject();
        if(leagueDetail == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
        } else {
            League league = leagueService.getLeagueById(id);
            json.put("teams", leagueDetail);
            json.put("league", league);
            result.setSuccess(true);
            result.setDetail(json);
            result.setMsg("");
        }
        return result;
    }
}
