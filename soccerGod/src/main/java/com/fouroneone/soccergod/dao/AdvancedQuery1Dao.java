package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.AdvancedQuery1;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AdvancedQuery1Dao {
    @Select("SELECT Team.name AS teamName, COUNT(*) AS number FROM Player NATURAL JOIN PlayerBelong JOIN Team USING(tid) WHERE position LIKE CONCAT('%',#{position},'%') GROUP BY(Team.name)")
    List<AdvancedQuery1> getNumberByPositionName(@Param("position") String position);
}
