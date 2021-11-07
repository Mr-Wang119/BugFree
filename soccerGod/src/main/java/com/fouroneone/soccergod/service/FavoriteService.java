package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.Favorite;

public interface FavoriteService {
    Favorite getUserFavoriteWithUin(int uin);
    void insertFavorite(int uin, int tid);
    void deleteFavorite(int uin);
    void updateFavorite(int uin, int tid);
}
