package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Favorite;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface FavoriteDao {
    @Select("SELECT * FROM Favorite WHERE uin = #{uin}")
    Favorite findById(int uin);

    @Insert("INSERT INTO Favorite(uin, tid) VALUES (#{uin}, #{tid})")
    void insertFavorite(@Param("uin") int uin, @Param("tid") int tid);

    @Delete("DELETE FROM Favorite WHERE uin = #{uin}")
    void deleteFavorite(int uin);

    @Update("UPDATE Favorite SET tid = #{tid} WHERE uin = #{uin}")
    void updateFavorite(@Param("uin") int uin, @Param("tid") int tid);
}