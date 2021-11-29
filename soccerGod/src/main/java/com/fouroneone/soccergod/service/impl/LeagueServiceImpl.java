package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.League;
import com.fouroneone.soccergod.dao.LeagueDao;
import com.fouroneone.soccergod.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeagueServiceImpl implements LeagueService {
    private LeagueDao leagueDao;
    @Autowired
    public LeagueServiceImpl(LeagueDao leagueDao) {
        this.leagueDao = leagueDao;
    }

    @Override
    public League getLeagueById(int lid) {
        return this.leagueDao.getLeagueById(lid);
    }

    @Override
    public List<League> findLeagueByName(String name) {
        return this.leagueDao.findLeagueByName(name);
    }

    @Override
    public List<League> getAllLeague() {
        return this.leagueDao.getAllLeague();
    }
}
