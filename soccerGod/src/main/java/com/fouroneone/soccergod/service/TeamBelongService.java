package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.TeamBelong;

public interface TeamBelongService {
    TeamBelong findById(int tid);
    void insertTeamBelong(int lid, int tid);
    void deleteTeamBelong(int tid);
    void updateTeamBelong(int lid, int tid);
}
