package com.fouroneone.soccergod.service.impl;


import com.fouroneone.soccergod.bean.UserInfo;
import com.fouroneone.soccergod.dao.UserDao;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    private UserDao userDao;

    @Autowired
    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserInfo getUserInfoWithUin(int uin) {
        return userDao.findById(uin);
    }

    @Override
    public String test() {
        return "hello";
    }
}
