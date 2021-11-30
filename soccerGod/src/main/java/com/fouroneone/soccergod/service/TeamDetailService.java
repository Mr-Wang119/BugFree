package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.bean.TeamDetail;

import java.util.List;

public interface TeamDetailService {
    public List<TeamDetail> getTeamDetail(int id);
    public Team getTeamByPlayerId(int id);
}
