package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.dao.TeamDao;
import com.fouroneone.soccergod.service.TeamService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TeamServiceImpl implements TeamService {
    @Resource
    TeamDao teamDao;

    @Override
    public List<Team> getTeamByDesc(String keywords) {
        return teamDao.searchTeamWithDesc(keywords);
    }

    @Override
    public List<Team> getTeamByName(String keywords) {
        return teamDao.searchTeamWithName(keywords);
    }

    @Override
    public Team getTeamById(int id) {
        return this.teamDao.getTeamById(id);
    }
}
