package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class BetController {
    @Autowired
    private UserService userService;
    private CompetitionService competitionService;

    @ResponseBody
    @RequestMapping(value = "/makebet", method = RequestMethod.POST)
    @Transactional(isolation = Isolation.REPEATABLE_READ)
    public Result makeABet(HttpServletRequest request) {
        Result result;
        if (!userService.isSignin(request.getSession())) {
            result = new Result("Could not finish bet as user not login", false, null);
        } else {
            int betPoints = Integer.parseInt(request.getParameter("points"));
            int mid = Integer.parseInt(request.getParameter("mid"));
            String username = (String)request.getSession().getAttribute("username");
            int points = userService.getPoints(username);
            int ponds = competitionService.findPondAmountById(mid);
            if (points-betPoints<0) {
                result = new Result("Could not finish bet because of insufficient balance", false, null);
            } else {
                userService.updatePoints(username, points - betPoints);
                competitionService.UpdatePondAmount(mid, ponds + betPoints);
                result = new Result("Bet succ", true, null);
            }
        }
        return result;
    }


}
