package com.fouroneone.soccergod.controller;

import com.alibaba.fastjson.JSONObject;
import com.fouroneone.soccergod.bean.Player;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.service.PlayerService;
import com.fouroneone.soccergod.service.TeamDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(originPatterns = "*")
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @Autowired
    private TeamDetailService teamDetailService;

    @ResponseBody
    @RequestMapping(value = "/player/{id}", method = RequestMethod.GET)
    public Result getPlayer(@PathVariable Integer id) {
        Result result = new Result();
        JSONObject json = new JSONObject();
        Player player = playerService.getPlayerWithPid(id);
        if (player == null) {
            result.setDetail(null);
            result.setMsg("Wrong id");
            result.setSuccess(false);
        } else {
            json.put("player", player);
            Team team = teamDetailService.getTeamByPlayerId(id);
            json.put("team", team);
            result.setSuccess(true);
            result.setMsg("");
            result.setDetail(json);
        }
        return result;
    }
}
