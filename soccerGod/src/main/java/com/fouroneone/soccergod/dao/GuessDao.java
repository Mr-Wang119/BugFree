package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Guess;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface GuessDao {
    @Insert("insert into Guess(username, mid, win, hostwin, time, amount)" +
            "values (#{username},#{mid}, #{win}, #{hostwin},#{time},#{amount})")
    void insertGuess(Guess guess);

    @Select("select sum(amount) from Guess where mid=#{mid} and hostwin=#{hostwin}")
    Integer getHostGuestPond(@Param("mid") int mid, @Param("hostwin") int hostwin);
}
