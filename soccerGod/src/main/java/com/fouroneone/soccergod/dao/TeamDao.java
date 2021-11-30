package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Team;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TeamDao {
    @Select("select * from Team where name like CONCAT('%', #{0}, '%')")
    List<Team> searchTeamWithName(String keyword);

    @Select("select * from Team where description like CONCAT('%', #{0}, '%')")
    List<Team> searchTeamWithDesc(String keyword);

    @Select("SELECT * FROM Team WHERE tid=#{id}")
    Team getTeamById(int id);
}
