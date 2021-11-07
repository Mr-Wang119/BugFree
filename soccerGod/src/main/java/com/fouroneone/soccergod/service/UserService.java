package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;

import javax.servlet.http.HttpSession;
import java.util.List;

public interface UserService {
    List<UserInfo> getUserList();
    Result login(UserInfo user);
    Result register(UserInfo user);
    UserInfo getUserInfoWithUin(int uin);
    UserInfo getUserInfoWithUsername(String username);
    UserInfo getUserInfoWithEmail(String email);
    void addUser(UserInfo user);
    void updateUser(UserInfo user);
    void deleteUserWithUin(int uin);

}
