package com.fouroneone.soccergod.service.impl;

import com.fouroneone.soccergod.bean.AdvancedQuery1;
import com.fouroneone.soccergod.dao.AdvancedQuery1Dao;
import com.fouroneone.soccergod.service.AdvancedQuery1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvancedQuery1ServiceImpl implements AdvancedQuery1Service {
    private AdvancedQuery1Dao advancedQuery1Dao;

    @Autowired
    public AdvancedQuery1ServiceImpl(AdvancedQuery1Dao advancedQuery1Dao) {
        this.advancedQuery1Dao = advancedQuery1Dao;
    }

    @Override
    public List<AdvancedQuery1> getNumberByPositionName(String position) {
        return advancedQuery1Dao.getNumberByPositionName(position);
    }
}
