package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Competition;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CompetitionDao {
    @Select("SELECT * FROM Compete WHERE mid = #{mid}")
    Competition findById(int mid);

    @Insert("INSERT INTO Compete (mid, hostTeamId, guestTeamId, hostScore, guest_score) VALUES (#{mid}, #{hostTeamId}, #{guestTeamId}, #{hostScore}, #{guestScore})")
    void insertCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);

    @Delete("DELETE FROM Compete WHERE mid = #{mid}")
    void deleteCompetition(int mid);

    @Update("UPDATE Compete SET mid = #{mid}, hostTeamId = #{hostTeamId}, guestTeamId = #{guestTeamId}, hostScore = #{hostScore}, guestScore = #{guestScore} WHERE mid = #{mid}")
    void updateCompetition(int mid, int hostTeamId, int guestTeamId, int hostScore, int guestScore);
}