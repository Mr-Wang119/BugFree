package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Competition;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CompetitionDao {
    @Select("SELECT * FROM Compete WHERE mid = #{mid}")
    Competition findById(int mid);

    @Insert("INSERT INTO Compete (mid, hostTeamId, guestTeamId, hostScore, guest_score) VALUES (#{mid}, #{hostTeamId}, #{guestTeamId}, #{hostScore}, #{guestScore})")
    void insertCompetition(@Param("mid") int mid, @Param("hostTeamId") int hostTeamId, @Param("guestTeamId") int guestTeamId, @Param("hostScore") int hostScore, @Param("guestScore") int guestScore);

    @Delete("DELETE FROM Compete WHERE mid = #{mid}")
    void deleteCompetition(int mid);

    @Update("UPDATE Compete SET mid = #{mid}, hostTeamId = #{hostTeamId}, guestTeamId = #{guestTeamId}, hostScore = #{hostScore}, guestScore = #{guestScore} WHERE mid = #{mid}")
    void updateCompetition(@Param("mid") int mid, @Param("hostTeamId") int hostTeamId, @Param("guestTeamId") int guestTeamId, @Param("hostScore") int hostScore, @Param("guestScore") int guestScore);
}