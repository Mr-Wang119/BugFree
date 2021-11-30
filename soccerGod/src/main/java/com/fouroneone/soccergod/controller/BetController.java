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

@Controller
@CrossOrigin(origins = "http://localhost:3000")
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
        if (!userService.isSignin(request.getSession())) {
            result = new Result("Could not finish bet as user not login", false, null);
        } else {
            int betPoints = Integer.parseInt(request.getParameter("points"));
            int mid = Integer.parseInt(request.getParameter("mid"));
            String username = (String)request.getSession().getAttribute("username");
            int hostWin = Integer.parseInt(request.getParameter("hostWin"));
            int points = userService.getPoints(username);
            int ponds = competitionService.findPondAmountById(mid);
            if (points-betPoints<0) {
                result = new Result("Could not finish bet because of insufficient balance", false, null);
            } else {
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
            }
        }
        return result;
    }


}
