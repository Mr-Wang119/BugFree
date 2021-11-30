package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.League;
import com.fouroneone.soccergod.bean.LeagueDetail;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.service.LeagueDetailService;
import com.fouroneone.soccergod.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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
        if(leagueDetail == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
        } else {
            League league = leagueService.getLeagueById(id);
            if(league == null) {
                result.setDetail(null);
                result.setMsg("N/A");
                result.setSuccess(false);
            } else {
                result.setSuccess(true);
                result.setDetail(leagueDetail);
                result.setMsg("");
            }
        }
        return result;
    }
}
