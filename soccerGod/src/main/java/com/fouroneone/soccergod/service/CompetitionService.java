package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.Competition;
import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CompetitionService {
    CompetitionWithCompete findById(int mid);
    List<CompetitionWithCompete> findRecentCompetitions(int num);
    int findPondAmountById(int mid);
    int UpdatePondAmount(int mid, int pondAmount);


//    void insertCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
//    void deleteCompetition(int mid);
//    void updateCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
}
