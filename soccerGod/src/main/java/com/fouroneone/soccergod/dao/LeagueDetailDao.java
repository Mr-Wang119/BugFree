package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.LeagueDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LeagueDetailDao {
    @Select("SELECT tid, Team.name as teamName, image FROM Team JOIN TeamBelong USING(tid) JOIN League USING(lid) WHERE lid=#{id};")
    public List<LeagueDetail> getLeagueDetailByLeagueID(int id);

    @Select("SELECT tid, Team.name as teamName, image FROM Team JOIN TeamBelong USING(tid) JOIN League USING(lid) ORDER BY League.`name`;")
    public List<LeagueDetail> getAllLeagueDetail();

}
