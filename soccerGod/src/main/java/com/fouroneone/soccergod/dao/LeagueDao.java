package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.League;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LeagueDao {
    @Select("SELECT * FROM League WHERE lid=#{lid}")
    public League getLeagueById(int lid);

    @Select("SELECT * FROM League WHERE name LIKE CONCAT('%', #{name}, '%')")
    public List<League> findLeagueByName(String name);
}
