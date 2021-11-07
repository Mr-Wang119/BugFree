package com.fouroneone.soccergod.dao;

import com.fouroneone.soccergod.bean.UserInfo;
import org.apache.ibatis.annotations.*;

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
            "values (#{info.email}, #{info.password}, #{info.username}, #{info.name}, #{info.birthday})")
    void insertUser(UserInfo info);

    @Update("update UserInfo set uin=#{info.uin}, email=#{info.email}, password=#{info.password}, " +
            "username=#{info.username}, name=#{info.name}, birthday=#{info.birthday},password=#{info.password} " +
            "where uin=#{uin}")
    void updateUser(UserInfo info);

    @Delete("delete from UserInfo where uin=#{uin}")
    void deleteUserByUin(int uin);
}
