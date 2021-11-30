package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.UserInfo;
import org.apache.ibatis.annotations.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Mapper
public interface UserDao {

    @Select("select * from UserInfo limit 10")
    List<UserInfo> findUsers();

    @Select("select * from UserInfo where uin = #{id}")
    UserInfo findById(int id);

    @Select("select * from UserInfo where username= #{username}")
    UserInfo findByUsername(String username);

    @Select("select * from UserInfo where email= #{email}")
    UserInfo findByEmail(String email);

    @Insert("insert into UserInfo(email, password, username, name, birthday)" +
            "values (#{email}, #{password}, #{username}, #{name}, #{birthday})")
    void insertUser(UserInfo info);

    @Update("update UserInfo set password=#{password}, " +
            "name=#{name}, birthday=#{birthday} " +
            "where username=#{username}")
    void updateUser(UserInfo info);

    @Delete("delete from UserInfo where uin=#{uin}")
    void deleteUserByUin(int uin);

    @Update("update UserInfo set points=#{points} where username=#{username}")
    void updatePoints(String username, int points);

    @Select("select points from UserInfo where username=#{username}")
    int getUserPoints(String username);
}
