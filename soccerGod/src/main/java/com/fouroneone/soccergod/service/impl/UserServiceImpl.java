package com.fouroneone.soccergod.service.impl;


import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.dao.UserDao;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<UserInfo> getUserList() {
        return userDao.findUsers();
    }

    @Override
    public Result login(UserInfo user) {
        Result result = new Result();
        result.setSuccess(false);
        result.setDetail(null);
        try {
            UserInfo existUser;
            if (user.getUsername()!=null && !user.getUsername().equals(""))
                existUser = userDao.findByUsername(user.getUsername());
            else
                existUser = userDao.findByEmail(user.getEmail());
            if (existUser==null) {
                result.setMsg("Username or email is wrong.");
            } else if (!user.getPassword().equals(existUser.getPassword())) {
                result.setMsg("Password is wrong.");
            } else {
                result.setMsg("Login success.");
                result.setSuccess(true);
                result.setDetail(existUser);
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public Result register(UserInfo user) {
        Result result = new Result();
        result.setSuccess(false);
        result.setDetail(null);
        try {
            UserInfo existUserByEmail = userDao.findByEmail(user.getEmail());
            UserInfo existUserByUsername = userDao.findByUsername(user.getUsername());
            if (existUserByEmail != null || existUserByUsername != null) {
                String errStr = "";
                if (existUserByEmail != null) {
                    errStr += "Email is used, try to use another email address. ";
                }
                if (existUserByUsername != null) {
                    errStr += "Username is used, try to use another username.";
                }
                result.setMsg(errStr);
            } else {
                userDao.insertUser(user);
                result.setMsg("Register success.");
                result.setSuccess(true);
                result.setDetail(user);
            }
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public UserInfo getUserInfoWithUin(int uin) {
        return userDao.findById(uin);
    }

    @Override
    public UserInfo getUserInfoWithUsername(String username) {
        return userDao.findByUsername(username);
    }

    @Override
    public UserInfo getUserInfoWithEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public void addUser(UserInfo user) {
        userDao.insertUser(user);
    }

    @Override
    public void updateUser(UserInfo user) {
        userDao.updateUser(user);
    }

    @Override
    public void deleteUserWithUin(int uin) {
        userDao.deleteUserByUin(uin);
    }

}
