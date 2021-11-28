package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Player;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PlayerService {
    Player getPlayerWithPid(int pid);
    List<Player> findPlayerByShortName(String shortName);
}
