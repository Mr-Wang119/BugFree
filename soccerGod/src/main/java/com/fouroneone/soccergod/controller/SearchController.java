package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@Controller
@RestController
@RequestMapping("/search")
public class SearchController {
    @Autowired
    TeamService teamService;

//    @RequestMapping(method = RequestMethod.POST, value="/teamkeyword")
//    public String getTeamByKeyword(@RequestParam("keyword") String keyword, Model model) {
//        List<Team> nameKey = teamService.getTeamByName(keyword);
//        model.addAttribute("teams", nameKey);
//
//        return "search";
//    }

    @RequestMapping("/keyword")
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
