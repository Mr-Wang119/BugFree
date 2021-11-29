package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.LeagueDetail;
import com.fouroneone.soccergod.dao.LeagueDetailDao;
import com.fouroneone.soccergod.service.LeagueDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeagueDetailServiceImpl implements LeagueDetailService {
    private LeagueDetailDao leagueDetailDao;

    @Autowired
    public LeagueDetailServiceImpl(LeagueDetailDao leagueDetailDao) {this.leagueDetailDao = leagueDetailDao;}

    @Override
    public List<LeagueDetail> getLeagueDetailByLeagueID(int id) {
        return this.leagueDetailDao.getLeagueDetailByLeagueID(id);
    }

    @Override
    public List<LeagueDetail> getAllLeagueDetail() {
        return this.leagueDetailDao.getAllLeagueDetail();
    }
}
