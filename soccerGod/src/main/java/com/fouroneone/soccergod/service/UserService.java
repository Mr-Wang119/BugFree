package com.fouroneone.soccergod.service;

import com.fouroneone.soccergod.bean.UserInfo;
import org.springframework.stereotype.Service;

public interface UserService {
    UserInfo getUserInfoWithUin(int uin);
    String test();
}
