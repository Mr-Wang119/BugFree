package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.TeamBelong;
import com.fouroneone.soccergod.dao.TeamBelongDao;
import com.fouroneone.soccergod.service.TeamBelongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamBelongServiceImpl implements TeamBelongService {
    private TeamBelongDao teamBelongDao;

    @Autowired
    public TeamBelongServiceImpl(TeamBelongDao teamBelongDao){
        this.teamBelongDao = teamBelongDao;
    }

    @Override
    public TeamBelong findById(int tid){
        return teamBelongDao.findById(tid);
    }
    @Override
    public void insertTeamBelong(int lid, int tid){
        teamBelongDao.insertTeamBelong(lid, tid);
    }
    @Override
    public void deleteTeamBelong(int tid){
        teamBelongDao.deleteTeamBelong(tid);
    }
    @Override
    public void updateTeamBelong(int lid, int tid){
        teamBelongDao.updateTeamBelong(lid, tid);
    }

}
