package com.fouroneone.soccergod.controller;

import com.alibaba.fastjson.JSONObject;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.bean.TeamDetail;
import com.fouroneone.soccergod.service.LeagueDetailService;
import com.fouroneone.soccergod.service.TeamDetailService;
import com.fouroneone.soccergod.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {
    @Autowired
    private TeamService teamService;

    @Autowired
    private LeagueDetailService leagueDetailService;

    @Autowired
    private TeamDetailService teamDetailService;

    @ResponseBody
    @RequestMapping(value = "/team/{id}", method = RequestMethod.GET)
    public Result teamDetail(@PathVariable Integer id) {
        Result result = new Result();
        JSONObject json = new JSONObject();
        List<TeamDetail> teamDetail = teamDetailService.getTeamDetail(id);
        if (teamDetail == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
        } else {
            Team team = teamService.getTeamById(id);
            json.put("team", team);
            json.put("players", teamDetail);
            result.setSuccess(true);
            result.setMsg("");
            result.setDetail(json);
        }

        return result;
    }
}
