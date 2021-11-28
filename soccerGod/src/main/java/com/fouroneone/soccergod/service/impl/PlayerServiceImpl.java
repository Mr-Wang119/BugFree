package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.Player;
import com.fouroneone.soccergod.dao.PlayerDao;
import com.fouroneone.soccergod.dao.UserDao;
import com.fouroneone.soccergod.service.PlayerService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class PlayerServiceImpl implements PlayerService {
    @Resource
    PlayerDao playerDao;

    @Autowired
    public PlayerServiceImpl(PlayerDao playerDao) {
        this.playerDao = playerDao;
    }

    @Override
    public Player getPlayerWithPid(int pid){
        return playerDao.findById(pid);
    }

    @Override
    public List<Player> findPlayerByShortName(String shortName){
        return playerDao.findPlayerByShortName(shortName);
    }


}
