package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Match;
import com.fouroneone.soccergod.bean.Player;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface MatchService {

    Match getMatchWithMid(int id);

    int addMatch(Match match);

    int updatePondAmount(int pondAmount,int id);
}
