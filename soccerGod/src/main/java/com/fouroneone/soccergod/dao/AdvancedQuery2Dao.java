package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.AdvancedQuery2;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AdvancedQuery2Dao {
    @Select("SELECT Team.name as name, position, count(*) as count, MAX(height) as max_height, AVG(height) as avg_height, " +
            "MIN(height) as min_height FROM Player JOIN PlayerBelong USING(pid) JOIN Team USING(tid) " +
            "WHERE weight>#{weight} and birthday > #{birthday} GROUP BY Team.name, position;")
    List<AdvancedQuery2> getResult(@Param("weight")int weight, @Param("birthday") String birthday);
}
