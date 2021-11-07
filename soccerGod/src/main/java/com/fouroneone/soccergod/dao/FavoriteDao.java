package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Favorite;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface FavoriteDao {
    @Select("SELECT * FROM Favorite WHERE uin = #{uin}")
    Favorite findById(int uin);

    @Insert("INSERT INTO Favorite(uin, tid) VALUES (#{uin}, #{tid})")
    void insertFavorite(int uin, int tid);

    @Delete("DELETE FROM Favorite WHERE uin = #{uin}")
    void deleteFavorite(int uin);

    @Update("UPDATE Favorite SET tid = #{tid} WHERE uin = #{uin}")
    void updateFavorite(int uin, int tid);
}