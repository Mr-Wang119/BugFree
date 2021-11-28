package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.Competition;
import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import org.apache.ibatis.annotations.Param;

public interface CompetitionService {
    CompetitionWithCompete findById(int mid);
    int findPondAmountById(int mid);
    int UpdatePondAmount(int mid, int pondAmount);


//    void insertCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
//    void deleteCompetition(int mid);
//    void updateCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
}
