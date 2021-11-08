package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.AdvancedQuery2;
import com.fouroneone.soccergod.bean.Competition;
import com.fouroneone.soccergod.bean.TeamBelong;
import com.fouroneone.soccergod.service.*;
import com.fouroneone.soccergod.bean.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

//@RestController
@Controller
@ResponseBody
public class helloController {
//    @Autowired
//    AdvancedQuery2Service advancedQuery2Service;
//
//    @RequestMapping(value = "/help_query2")
//    public List<AdvancedQuery2> test_query2(){
//        List<AdvancedQuery2> temp = advancedQuery2Service.getResult(85, "1978-01-28");
//        return temp;
//    }

//    @Autowired
//    UserService userService;
//
//    @Autowired
//    FavoriteService favoriteService;
//
//    @Autowired
//    TeamBelongService teamBelongService;
//
//    @Autowired
//    CompetitionService competitionService;
//
//    @RequestMapping(value = "/help")
//    public String help(){
//        return userService.getUserInfoWithUin(10221083).getUsername();
////        return userService.test();
////        return favoriteService.getUserFavoriteWithUin(10221083).getUin();
//    }
//
//    @RequestMapping(value = "/help_teamBelong")
//    public String test_teamBelong(){
//        TeamBelong temp = teamBelongService.findById(1008);
//        if(temp == null){
//            return "NullPointerException";
//        }
//        return String.valueOf(temp.getLid());
//    }
//
//    @RequestMapping(value = "/help_competition")
//    public String test_Competition(){
//        Competition temp = competitionService.getCompetitionWithMid(10);
//        if(temp == null){
//            return "NullPointerException";
//        }
//        return "mid is: " + temp.getMid() + " host id is: " +
//                temp.getHostTeamId() + ", guest id is: " + temp.getGuestTeamId()
//                + " host score is: " + temp.getHostScore() + ", guest score is: "
//                + temp.getGuestScore();
//    }
//
//    @RequestMapping(value = "/test")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public List<UserInfo> test() {
//        return userService.getUserList();
//    }
//


}
