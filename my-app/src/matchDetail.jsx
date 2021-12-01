import React from 'react';
import axios from 'axios';
import {Spin, Progress, Button, Popover, message} from 'antd';
import './css/matchDetail.css'
import {Redirect} from 'react-router-dom';
import api from './utils/api';

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            compete: {},
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
        let path = api.match+id;
        axios.get(path, {withCredentials: true})
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, compete: data.detail})
                // match has already finished || user has already voted
                if (data.detail.finish === 1 || data.detail.hostwin !== null) {
                    _this.setState({canGuess: false});
                }
                
            } else {
                window.location.href = '/error';
            }
        })
        .catch(function (error) {
            console.log(error);
            message.error('Network Error');
        })
    }

    render() {
        return (
            <div>
                <div class="innner_banner" style={{ marginBottom: "20px" }}>
                    <div class="container">
                        <h3>
                            Match
                        </h3>
                    </div>
                </div>
                <Spin spinning={!this.state.isReady} delay={500}>
                <div className="match-detail">
                    <div class="kf_overview kf_current_match_wrap">
                        <h6 class="kf_hd1 margin_0">
                            <span>Detail</span>
                        </h6>
                        
                        <div class="kf_opponents_outerwrap">
                            <h6 class="kf_h4">
                                <span>{this.state.compete.name}</span>
                                <span style={{color: "#ffbe00"}}>{this.state.compete.location!=='nan' ? this.state.compete.location: "TBD"}</span>
                                <em>{this.state.compete.time}</em>
                            </h6>
                            <div class="kf_opponents_wrap">

                                {/* host block */}
                                <div class="kf_opponents_dec">
                                    <span><img src={this.state.compete.hostUrl} alt=""/></span>
                                    <div class="text">
                                        <h6><a href={'/team/'+this.state.compete.hostTeamId}>{this.state.compete.hostName}</a></h6>
                                    </div>
                                    <div className="match-progress">
                                    <Progress
                                        strokeColor={{
                                            '0%': '#e9c46a',
                                            '100%': '#e76f51',
                                        }}
                                        status="normal"
                                        percent={this.state.compete.hostPond === null ? 0: 100*this.state.compete.hostPond/this.state.compete.pondAmount}
                                    />
                                    </div>
                                    <div>
                                        {this.state.isLogin? <GuessBtn 
                                            canGuess={this.state.canGuess} 
                                            compete={this.state.compete}
                                            hostwin={1}
                                            history={this.props.history}
                                        />: ''}
                                    </div>
                                </div>


                                <div class="kf_opponents_gols">
                                    <h5><span>{this.state.compete.hostScore}</span> : <span>{this.state.compete.guestScore}</span></h5>
                                    <p>{this.state.compete.finish === 1 ? "Final Score" : "Pending"}</p>
                                </div>

                                {/* guest block */}
                                <div class="kf_opponents_dec span_right">
                                    <span><img src={this.state.compete.guestUrl} alt=""/></span>
                                    <div class="text">
                                        <h6><a href={'/team/'+this.state.compete.guestTeamId}>{this.state.compete.guestName}</a></h6>
                                    </div>
                                    <div className="match-progress">
                                        <Progress
                                            strokeColor={{
                                                '0%': '#e9c46a',
                                                '100%': '#e76f51',
                                            }}
                                            status="normal"
                                            percent={this.state.compete.guestPond === null ? 0: 100*this.state.compete.guestPond/this.state.compete.pondAmount}
                                        />
                                    </div>
                                    <div>
                                        {this.state.isLogin? <GuessBtn 
                                            canGuess={this.state.canGuess} 
                                            compete={this.state.compete}
                                            hostwin={-1}
                                            history={this.props.history}
                                        />: ''}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                </Spin>
            </div>
        );
    }
}

class GuessBtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: '',
            error: ''
        }
    }

    submitForm() {
        const _this = this;
        let datas = new FormData();

        datas.append('points', this.state.points);
        datas.append('mid', this.props.compete.mid);
        datas.append('hostWin', this.props.hostwin);   
        datas.append('username', localStorage.getItem('usernameToken'));   

        axios.post(api.makeBet, datas)
        .then(response => {
            let data = response.data;
            if (data.success == true) {
                // redirect
                window.location.reload()
            } else {
                _this.setState({error: data.msg});
            }
        })
        .catch(error => {
            console.log(error);
            message.error('Network Error');
        });
    }

    setUserInfo(event, key) {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    render() {
        return (
        <div>
            <div>
                {
                this.props.canGuess? <Popover content={
                    <div>
                        <div class="col-auto">
                            <label for="points" class="visually-hidden">Point</label>
                            <input type="number" min="1" onInput={(event)=>this.setUserInfo(event, 'points')} class="form-control" id="points"/>
                        </div>
                        <div class="col-auto">
                            <button onClick={()=>this.submitForm()} class="btn btn-warning mb-3">Confirm</button>
                        </div>
                    </div>
                } title="Enter number to vote!" trigger="click">
                    <Button type="primary">Vote</Button>
                </Popover> 
                : ( this.props.compete.hostwin !== null ? (this.props.compete.hostwin === this.props.hostwin ? <Button type="primary" disabled style={{color: "#fff", backgroundColor: "#198754"}}>Vote(&#10003;)</Button> : <Button type="primary" disabled>Vote</Button>) 
                : <Button type="primary" disabled>Vote</Button>
                )}
            </div>
            <div className="form-floating mb-3">
                <p style={{color: "indianred"}}>{this.state.error}</p>
            </div>
        </div>
        );
    }
}

export default MatchDetail;