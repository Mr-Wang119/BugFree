package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.AdvancedQuery2;
import com.fouroneone.soccergod.dao.AdvancedQuery2Dao;
import com.fouroneone.soccergod.service.AdvancedQuery2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvancedQuery2ServiceImpl implements AdvancedQuery2Service {
    private AdvancedQuery2Dao advancedQuery2Dao;

    @Autowired
    public AdvancedQuery2ServiceImpl(AdvancedQuery2Dao advancedQuery2Dao){
        this.advancedQuery2Dao = advancedQuery2Dao;
    }

    @Override
    public List<AdvancedQuery2> getResult(int weight, String birthday) {
        return advancedQuery2Dao.getResult(weight, birthday);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 9d86b51 (整合advance query并加上前端，使用重定向修改delete)
