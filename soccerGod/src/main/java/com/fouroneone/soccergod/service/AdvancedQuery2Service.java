package com.fouroneone.soccergod.service;
import com.fouroneone.soccergod.bean.AdvancedQuery2;

import java.util.List;

public interface AdvancedQuery2Service {
    List<AdvancedQuery2> getResult(int weight, String birthday);
}
