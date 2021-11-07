package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.Favorite;
import com.fouroneone.soccergod.dao.FavoriteDao;
import com.fouroneone.soccergod.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService{
    private FavoriteDao favoriteDao;

    @Autowired
    public FavoriteServiceImpl(FavoriteDao favoriteDao) {
        this.favoriteDao = favoriteDao;
    }

    public Favorite getUserFavoriteWithUin(int uin) {
        return favoriteDao.findById(uin);
    }

    public void insertFavorite(int uin, int tid){
        favoriteDao.insertFavorite(uin, tid);
    }

    public void deleteFavorite(int uin){
        favoriteDao.deleteFavorite(uin);
    }

    public void updateFavorite(int uin, int tid){
        favoriteDao.updateFavorite(uin, tid);
    }
}
