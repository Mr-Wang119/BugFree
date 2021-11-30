package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Team;
import com.fouroneone.soccergod.bean.TeamDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TeamDetailDao {
    @Select("select pid, shortName, longName, position, Player.image as playerImage, nationality from PlayerBelong JOIN Team USING(tid) JOIN Player USING (pid) WHERE tid=#{id};")
    public List<TeamDetail> getTeamDetail(int id);

    @Select("select tid, Team.name as name, Team.image as image from PlayerBelong JOIN Team USING(tid) JOIN Player USING (pid) WHERE pid=#{id};")
    public Team getTeamByPlayerId(int id);
}
