import React, { Component } from 'react';
import axios from 'axios';
import api from '../utils/api';
import { Row, Col, Card, Spin } from 'antd';
import '../css/HotLeagues.css';

class HotLeagues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: new Map(),
        };
    }

    render() {
        if (this.state.leagues.size == 0) {
            return <Spin delay="1000" />
        }
        const leagueList = this.state.leagues.map(function (leagueSet) {
            return <LeagueCard leagueSet={leagueSet} />
        });
        return (
            <Row gutter={16}>
                {leagueList}
            </Row>
        );
    }

    componentDidMount() {
        axios.get(api.hotLeagues)
            .then(res => {
                this.setState({
                    leagues: res.data.detail
                })
            })
    }
}

class LeagueCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const teamArr = new Map();
        for (var i=0; i<Math.min(this.props.leagueSet.teams.length, 8); i++) {
            teamArr.set(<TeamRow team={this.props.leagueSet.teams[i]} />);
        }
        // const teamArr = this.props.leagueSet.teams.map(function (team) {
        //     return <TeamRow team={team} />
        // });
        return (
            <Col span={8}>
                <Card bordered={false} >
                    <div class="widget widget_ranking widget_league_table">
                        <h6 class="kf_hd1">
                            <span>{this.props.leagueSet.league.name}</span>
                        </h6>
                        <div class="kf_border">
                            <ul class="kf_table">
                                <li class="table_head">
                                    <div class="team_name">
                                        <strong>Team</strong>
                                    </div>
                                    <div class="team_logo">
                                    </div>
                                </li>
                                {teamArr}
                            </ul>
                        </div>
                        <input class="input-btn" type="button" value="Show All" 
                            onClick={()=>window.location.href='/league/'+this.props.leagueSet.league.lid}></input>
                    </div>
                </Card>
            </Col>
        )
    }
}

class TeamRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={()=>window.location.href='/team/'+this.props.team.tid}>
                <div class="table_no">
                    <span>{this.props.team.teamName}</span>
                </div>
                <div class="team_logo">
                    <span><img src={this.props.team.image} alt="" width="50" height="50"/></span>
                    <a href={'/team/'+this.props.team.tid}>{this.props.team.teamName}</a>
                </div>
            </li>
        )
    }
}

export default HotLeagues;