package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.TeamDetail;
import com.fouroneone.soccergod.dao.TeamDetailDao;
import com.fouroneone.soccergod.service.TeamDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamDetailServiceImpl implements TeamDetailService {
    private TeamDetailDao teamDetailDao;

    @Autowired
    public TeamDetailServiceImpl(TeamDetailDao teamDetailDao) {this.teamDetailDao = teamDetailDao;}

    @Override
    public List<TeamDetail> getTeamDetail(int id) {
        return this.teamDetailDao.getTeamDetail(id);
    }
}
