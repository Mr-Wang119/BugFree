package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Guess;
import org.apache.ibatis.annotations.Param;

public interface GuessService {
    void addNewGuess(Guess guess);

    Integer getHostGuestPond(int mid, int hostwin);

    Integer isGuess(@Param("mid") int mid, @Param("username") String username);
}
