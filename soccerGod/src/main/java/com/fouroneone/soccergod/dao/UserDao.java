package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.UserInfo;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface UserDao {
    @Select("select * from UserInfo where uin = #{id}")
    UserInfo findById(int id);
}
