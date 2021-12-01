import React from 'react';
import axios from 'axios';
import { Spin, Progress } from 'antd';
import './css/player.css'

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            team: {},
            player: {}
        }
    }

    componentDidMount() {
        let pid = this.props.match.params.id;
        const _this = this;
        let path = "http://localhost:8080/player/"+pid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            console.log(data.detail);
            if (data.success == true) {
                _this.setState({isReady: true, player: data.detail.player, team: data.detail.team})
            } else {
                _this.props.history.push('/error');
            }
        })
        .catch(function (error) {
            console.log(error);
            _this.props.history.push('/error');
        })
    }

    render() {
        if (this.state.isReady == false) {
            return (
                <Spin delay="1000"/>
            );
        }
        return (
            <div>
                <div class="innner_banner" style={{ marginBottom: "20px" }}>
                    <div class="container">
                        <h3>
                            Player
                        </h3>
                    </div>
                </div>
                <div className="player-container">
                    <h6 className="kf_hd1 margin_0">
                        <span>Player Information</span>
                    </h6>
                    <div className="kf_roster_dec playerInfo">
                        <figure className="playerImage">
                            <img src={this.state.player.image} alt=""/>
                        </figure>
                        <div className="text playerText" style={{width: "60%"}}>
                            <span>{this.state.player.position}</span>
                            <div className="text_overflow">
                                <h3>
                                <span><a href={'/team/'+this.state.team.tid}><img width={50} src={this.state.team.image}/>{this.state.team.name}</a></span>
                                    {this.state.player.shortName}
                                </h3>
                                <em>{this.state.player.longName}</em>
                            </div>
                        </div>
                    </div>
                    <div class="kf_plyer_rating" style={{margin: "20px auto"}}>
                        <span>
                            <strong>Height</strong>
                            <b>{this.state.player.height}</b>
                            <em>cm</em>
                        </span>
                        <span>
                            <strong>Weight</strong>
                            <b>{this.state.player.weight}</b>
                            <em>kg</em>
                        </span>
                        <span>
                            <strong>Birthday</strong>
                            <b>{this.state.player.birthday}</b>
                        </span>
                    </div>
                </div>
                <AbilityTable player={this.state.player}/>
            </div>
        );
    }
}

class AbilityTable extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        // !GK
        if (this.props.player.gkSpeed === 0) {
            return (    
                <div className="player-skill">
                    <div>
                        <span>Shooting</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.shooting}
                            />
                    </div>
                    
                    <div>
                        <span>Physical</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.physic}
                            />
                    </div>
                    
                    <div>
                        <span>Passing</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.passing}
                            />
                    </div>

                    <div>
                        <span>Pace</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.pace}
                            />
                    </div>

                    <div>
                        <span>Defending</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.defending}
                            />
                    </div>

                    <div>
                        <span>Dribbling</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.dribbling}
                            />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="player-skill">
                    <div>
                        <span>Speed</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.gkSpeed}
                            />
                    </div>

                    <div>
                        <span>Position</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.gkPosition}
                            />
                    </div>
                    
                    <div>
                        <span>Reflexes</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.gkReflexes}
                            />
                    </div>
                    
                    <div>
                        <span>Handling</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.gkHandling}
                            />
                    </div>

                    <div>
                        <span>Diving</span>
                        <Progress
                            strokeColor={{
                                '0%': '#e9c46a',
                                '100%': '#e76f51',
                            }}
                            percent={this.props.player.gkDiving}
                            />
                    </div>
                </div>
                
            );
        }
    }
}

export default Player;