let rootUrl = "http://localhost:8080/";

let api = {
    login: rootUrl+'login/',
    logout: rootUrl+'logout/',
    signup: rootUrl+'signup/',
    user: rootUrl+'user/',
    edituser: rootUrl+'/edit/',

    recentMatch: rootUrl+'recentCompetition/',
    hotLeagues: rootUrl+'favleague/',
    teamSearch: rootUrl+'search/keyword/',
    
    makeBet: rootUrl+'makebet/',

    league: rootUrl+'league/',
    match: rootUrl+'match/',
    team: rootUrl+'team/',
    player: rootUrl+'player/',

    test: rootUrl+'test/',
}

export default api