package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.Competition;

public interface CompetitionService {
    Competition getCompetitionWithMid(int mid);
    void insertCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
    void deleteCompetition(int mid);
    void updateCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
}
