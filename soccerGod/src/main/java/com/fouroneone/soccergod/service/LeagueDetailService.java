package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.LeagueDetail;

import java.util.List;

public interface LeagueDetailService {
    List<LeagueDetail> getLeagueDetailByLeagueID(int id);
    List<LeagueDetail> getAllLeagueDetail();
}
