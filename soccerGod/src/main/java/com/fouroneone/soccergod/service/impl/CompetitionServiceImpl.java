package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import com.fouroneone.soccergod.dao.CompetitionDao;
import com.fouroneone.soccergod.dao.UserDao;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

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
    }

    @Override
    public List<CompetitionWithCompete> findRecentCompetitions(int num) {
        Date date=new Date();//此时date为当前的时间
        System.out.println(date);
        SimpleDateFormat dateFormat=new SimpleDateFormat("YYYY-MM-dd");
        String date_str = dateFormat.format(date);
        return competitionDao.findRecentCompetitions(num, date_str);
    }

    ;

    @Override
    public int findPondAmountById(int mid){
        return competitionDao.findPondAmountById(mid);
    }

    @Override
    public int UpdatePondAmount(int mid, int pondAmount){
        return competitionDao.UpdatePondAmount(mid,pondAmount);
    }

    @Override
    public List<CompetitionWithCompete> getMatchPending() {
        return competitionDao.getMatchPending();
    }

    @Override
    public List<CompetitionWithCompete> getMatchFinished() {
        return competitionDao.getMatchFinished();
    }
}
