package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.Player;
import com.fouroneone.soccergod.bean.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import java.util.*;

@Mapper
public interface PlayerDao {
    @Select("select * from Player where pid = #{id}")
    Player findById(int id);

    @Select("select * from Player where shortName = #{shortName}")
    List<Player> findPlayerByShortName(String shortName);
}
