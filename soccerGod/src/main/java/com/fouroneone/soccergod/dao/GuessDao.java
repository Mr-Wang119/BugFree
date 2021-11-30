package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Guess;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface GuessDao {
    @Insert("insert into Guess(username, mid, status, time, amount)" +
            "values (#{username},#{mid},#{status},#{time},#{amount}")
    void insertGuess(Guess guess);

    @Select("select sum(amount) from Guess where mid=#{mid} and status=#{status}")
    int getHostGuestPond(int mid, int status);
}
