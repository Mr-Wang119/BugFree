package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.TeamBelong;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface TeamBelongDao {
    @Select("SELECT * FROM TeamBelong WHERE tid = #{tid}")
    TeamBelong findById(int tid);

    @Insert("INSERT INTO TeamBelong (lid, tid) VALUES (#{lid}, #{tid})")
    void insertTeamBelong(int lid, int tid);

    @Delete("DELETE FROM TeamBelong WHERE tid = #{tid}")
    void deleteTeamBelong(int tid);

    @Update("UPDATE TeamBelong SET lid = #{lid}, tid = #{tid} WHERE tid = #{tid}")
    void updateTeamBelong(int lid, int tid);
}
