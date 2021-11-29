package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "http://localhost:3000/team")
public class TeamController {
    @Autowired
    private TeamService teamService;

}
