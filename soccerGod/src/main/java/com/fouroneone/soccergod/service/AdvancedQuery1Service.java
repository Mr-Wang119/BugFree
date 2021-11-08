package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.AdvancedQuery1;

import java.util.List;

public interface AdvancedQuery1Service {
    List<AdvancedQuery1> getNumberByPositionName(String position);
}
