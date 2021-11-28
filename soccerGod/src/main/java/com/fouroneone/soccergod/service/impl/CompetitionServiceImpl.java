package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import com.fouroneone.soccergod.dao.CompetitionDao;
import com.fouroneone.soccergod.dao.UserDao;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompetitionServiceImpl implements CompetitionService {
    private CompetitionDao competitionDao;

    @Autowired
    public CompetitionServiceImpl(CompetitionDao competitionDao) {
        this.competitionDao = competitionDao;
    }

//functions
    @Override
    public CompetitionWithCompete findById(int mid){
        return competitionDao.findById(mid);
    };

    @Override
    public int findPondAmountById(int mid){
        return competitionDao.findPondAmountById(mid);
    }

    @Override
    public int UpdatePondAmount(int mid, int pondAmount){
        return competitionDao.UpdatePondAmount(mid,pondAmount);
    }
}
