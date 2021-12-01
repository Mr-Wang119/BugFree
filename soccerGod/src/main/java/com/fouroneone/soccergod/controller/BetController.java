package com.fouroneone.soccergod.controller;

import com.fouroneone.soccergod.bean.Guess;
import com.fouroneone.soccergod.bean.Result;
import com.fouroneone.soccergod.service.CompetitionService;
import com.fouroneone.soccergod.service.GuessService;
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
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

@Controller
@CrossOrigin(originPatterns = "*")
public class BetController {
    @Autowired
    private UserService userService;
    @Autowired
    private CompetitionService competitionService;
    @Autowired
    private GuessService guessService;

    @ResponseBody
    @RequestMapping(value = "/makebet", method = RequestMethod.POST)
    @Transactional(isolation = Isolation.REPEATABLE_READ)
    public Result makeABet(HttpServletRequest request) {
        Result result;
        System.out.println(request.getParameter("points"));
        String pointsstr = request.getParameter("points");
        if (Objects.equals(pointsstr, "")) {
            result = new Result("Could not finish bet because of null value", false, null);
            return result;
        }
        Integer betPoints = Integer.parseInt(pointsstr);
        int mid = Integer.parseInt(request.getParameter("mid"));
        String username = request.getParameter("username");
        int hostWin = Integer.parseInt(request.getParameter("hostWin"));
        int points = userService.getPoints(username);
        int ponds = competitionService.findPondAmountById(mid);
        if (betPoints<=0) {
            result = new Result("Could not finish bet because of negative or null bet points", false, null);
            return result;
        }
        if (points-betPoints<0) {
            result = new Result("Could not finish bet because of insufficient balance", false, null);
            return result;
        }
        userService.updatePoints(username, points - betPoints);
        competitionService.UpdatePondAmount(mid, ponds + betPoints);
        Guess guess = new Guess();
        guess.setAmount(betPoints);
        guess.setMid(mid);
        guess.setUsername(username);
        Date date=new Date();//此时date为当前的时间
        SimpleDateFormat dateFormat=new SimpleDateFormat("YYYY-MM-dd");
        String date_str = dateFormat.format(date);
        guess.setTime(date_str);
        guess.setHostwin(hostWin);
        guess.setWin(-1);
        guessService.addNewGuess(guess);
        result = new Result("Bet succ", true, null);

        return result;
    }


}
