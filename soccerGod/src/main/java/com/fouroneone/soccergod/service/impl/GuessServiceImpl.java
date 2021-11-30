package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.Guess;
import com.fouroneone.soccergod.dao.GuessDao;
import com.fouroneone.soccergod.service.GuessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuessServiceImpl implements GuessService {
    @Autowired
    GuessDao guessDao;

    @Override
    public void addNewGuess(Guess guess) {
        guessDao.insertGuess(guess);
    }

    @Override
    public int getHostGuestPond(int mid, int status) {
        return guessDao.getHostGuestPond(mid, status);
    }
}
