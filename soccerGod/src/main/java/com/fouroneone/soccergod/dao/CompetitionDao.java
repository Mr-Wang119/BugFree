package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Competition;
import com.fouroneone.soccergod.bean.CompetitionWithCompete;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CompetitionDao {

    @Select("SELECT hostTeam.image as hostUrl, guestTeam.image as guestUrl, hostTeam.name AS hostName, hostScore, guestTeam.name AS guestName, mid, guestScore, location, time, finish,Competition.name as name,pondAmount,hostTeamId,guestTeamId\n" +
            "    FROM Compete NATURAL JOIN Competition JOIN Team AS hostTeam ON hostTeam.tid=Compete.hostTeamId JOIN Team AS guestTeam ON Compete.guestTeamId=guestTeam.tid WHERE mid = #{mid}")
    CompetitionWithCompete findById(int mid);

    @Select("SELECT pondAmount FROM Competition WHERE mid = #{mid}")
    int findPondAmountById(int mid);

    @Update("UPDATE Competition SET pondAmount = #{pondAmount} WHERE mid = #{mid}")
    int UpdatePondAmount(@Param("mid") int mid,@Param("pondAmount") int pondAmount);

    @Insert("INSERT INTO Compete (mid, hostTeamId, guestTeamId, hostScore, guest_score) VALUES (#{mid}, #{hostTeamId}, #{guestTeamId}, #{hostScore}, #{guestScore})")
    void insertCompetition(@Param("mid") int mid, @Param("hostTeamId") int hostTeamId, @Param("guestTeamId") int guestTeamId, @Param("hostScore") int hostScore, @Param("guestScore") int guestScore);

    @Delete("DELETE FROM Compete WHERE mid = #{mid}")
    void deleteCompetition(int mid);

    @Update("UPDATE Compete SET mid = #{mid}, hostTeamId = #{hostTeamId}, guestTeamId = #{guestTeamId}, hostScore = #{hostScore}, guestScore = #{guestScore} WHERE mid = #{mid}")
    void updateCompetition(@Param("mid") int mid, @Param("hostTeamId") int hostTeamId, @Param("guestTeamId") int guestTeamId, @Param("hostScore") int hostScore, @Param("guestScore") int guestScore);
}