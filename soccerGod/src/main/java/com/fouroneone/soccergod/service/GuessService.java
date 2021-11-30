package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Guess;

public interface GuessService {
    void addNewGuess(Guess guess);

    int getHostGuestPond(int mid, int status);
}
