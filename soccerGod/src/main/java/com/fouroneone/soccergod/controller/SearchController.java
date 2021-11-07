package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
public class SearchController {
    @Autowired
    TeamService teamService;

    @RequestMapping("/teamkeyword")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, List<Team>> getTeamByKeyword(@RequestBody Map<String, Object> payLoad) {
        String keyword = (String) payLoad.get("keyword");
        List<Team> nameKey = teamService.getTeamByName(keyword);
        List<Team> descKey = teamService.getTeamByDesc(keyword);
        Map<String, List<Team>> mp = new HashMap<>();
        mp.put("names", nameKey);
        mp.put("descs", descKey);
        return mp;
    }
}
