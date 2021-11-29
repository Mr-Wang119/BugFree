package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.League;

import java.util.List;

public interface LeagueService {
    League getLeagueById(int lid);
    List<League> findLeagueByName(String name);
    public List<League> getAllLeague();
}
