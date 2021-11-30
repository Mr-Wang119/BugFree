package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Team;
import java.util.List;

public interface TeamService {

    List<Team> getTeamByDesc(String keywords);
    List<Team> getTeamByName(String keywords);
    Team getTeamById(int id);
}
