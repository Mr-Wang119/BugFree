package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.Competition;
import com.fouroneone.soccergod.dao.CompetitionDao;
import com.fouroneone.soccergod.service.CompetitionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompetitionServiceImpl implements CompetitionService{
    private CompetitionDao competitionDao;

    @Autowired
    public CompetitionServiceImpl(CompetitionDao competitionDao){
        this.competitionDao = competitionDao;
    }
    public Competition getCompetitionWithMid(int mid){
        return competitionDao.findById(mid);
    }
    public void insertCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore){
        competitionDao.insertCompetition(mid, hostTeamId, guestTeamId, hostScore, guestScore);
    }
    public void deleteCompetition(int mid){
        competitionDao.deleteCompetition(mid);
    }
    public void updateCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore){
        competitionDao.updateCompetition(mid, hostTeamId, guestTeamId, hostScore, guestScore);
    }
}
