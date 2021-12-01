import React from 'react';
import axios from 'axios';
import {Spin, Progress, Button, Popover, Input} from 'antd';
import './css/matchDetail.css'

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            match: {},
            isLogin: false,
            canGuess: true
        }
    }

    componentDidMount() {
        const _this = this;
        // if you want to guess, you must login first
        if(localStorage.getItem('usernameToken')) {
            this.setState({isLogin: true});
        }

        let id = this.props.match.params.id;
        let path = "http://localhost:8080/match/"+id;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, match: data.detail})
                if (data.detail.finish === 1) {
                    _this.setState({canGuess: false});
                }
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
        console.log(this.state)
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
                            Match
                        </h3>
                    </div>
                </div>
                <div className="match-detail">
                    <div class="kf_overview kf_current_match_wrap">
                        <h6 class="kf_hd1 margin_0">
                            <span>Detail</span>
                        </h6>
                        
                        <div class="kf_opponents_outerwrap">
                            <h6 class="kf_h4">
                                <span>{this.state.match.name}</span>
                                <span style={{color: "#ffbe00"}}>{this.state.match.location!=='nan' ? this.state.match.location: "TBD"}</span>
                                <em>{this.state.match.time}</em>
                            </h6>
                            <div class="kf_opponents_wrap">

                                {/* host block */}
                                <div class="kf_opponents_dec">
                                    <span><img src={this.state.match.hostUrl} alt=""/></span>
                                    <div class="text">
                                        <h6><a href={'/team/'+this.state.match.hostTeamId}>{this.state.match.hostName}</a></h6>
                                    </div>
                                    <div className="match-progress">
                                    <Progress
                                        strokeColor={{
                                            '0%': '#e9c46a',
                                            '100%': '#e76f51',
                                        }}
                                        status="normal"
                                        percent={this.state.match.hostPond === null ? 0: 100*this.state.match.hostPond/this.state.match.pondAmount}
                                    />
                                    </div>
                                    <div>
                                        {this.state.isLogin? <GuessBtn canGuess={this.state.canGuess}/>: ''}
                                    </div>
                                </div>


                                <div class="kf_opponents_gols">
                                    <h5><span>{this.state.match.hostScore}</span> : <span>{this.state.match.guestScore}</span></h5>
                                    <p>{this.state.match.finish === 1 ? "Final Score" : "Pending"}</p>
                                </div>

                                {/* guest block */}
                                <div class="kf_opponents_dec span_right">
                                    <span><img src={this.state.match.guestUrl} alt=""/></span>
                                    <div class="text">
                                        <h6><a href={'/team/'+this.state.match.guestTeamId}>{this.state.match.guestName}</a></h6>
                                    </div>
                                    <div className="match-progress">
                                        <Progress
                                            strokeColor={{
                                                '0%': '#e9c46a',
                                                '100%': '#e76f51',
                                            }}
                                            status="normal"
                                            percent={this.state.match.guestPond === null ? 0: 100*this.state.match.guestPond/this.state.match.pondAmount}
                                        />
                                    </div>
                                    <div>
                                        {this.state.isLogin? <GuessBtn canGuess={this.state.canGuess}/>: ''}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class GuessBtn extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                this.props.canGuess? <Popover content={
                    <form class="row g-3" method="post" action="http://localhost:8080/makebet">
                        <div class="col-auto">
                            <label for="point" class="visually-hidden">Point</label>
                            <input type="number" class="form-control" id="point"/>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-warning mb-3">Confirm</button>
                        </div>
                    </form>
                } title="Enter number to vote!" trigger="click">
                    <Button type="primary">Vote</Button>
                </Popover> : <Button type="primary" disabled>Vote</Button>}
                
            </div>
        );
    }
}

export default MatchDetail;