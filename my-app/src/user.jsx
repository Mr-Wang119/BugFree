import React from 'react';
import axios from "axios";
import { Spin } from 'antd';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            info: {}
        };
    }

    // if already login, load page
    // else, return to login page
    componentWillMount() {
        const _this = this;
        if(localStorage.getItem('usernameToken')) {
            let username = localStorage.getItem('usernameToken')
            let usernameInUrl = _this.props.match.params.username
            if (username != usernameInUrl) {
                _this.props.history.push('/error');
            }
            let path = 'http://localhost:8080/user/'+username;
            axios.get(path)
            .then(function (response) {
                let data = response.data;
                if (data.success == true) {
                    _this.setState({success: true, info: data.detail});
                } else {
                    _this.props.history.push('/error');
                }
            })
            .catch(function (error) {
                console.log(error);
                _this.props.history.push('/error');
            });
        } else {
            this.props.history.go(-1);
        }
    }

    render() {
        if (!this.state.success) {
            return (
                <Spin delay="1000"/>
            );
        }
        return (
            <Info info={this.state.info}/>
        );
    }
}


class Info extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div class="widget roster_sidebar">
                    <h6 class="kf_hd1 margin_0">
                        <span>User Information</span>
                    </h6>
                    <div class="kf_roster_dec">
                        <figure>
                            <img src="extra-images/rooster5.png" alt="" />
                        </figure>
                        <div class="text">
                            <div class="text_overflow">
                                <h3>{this.props.info.name}</h3>
                                <em>1st shooting Gaurd</em>
                            </div>
                        </div>
                    </div>
                    <div class="kf_plyer_rating">
                        <span>
                            <strong>Assists</strong>
                            <b>15.8</b>
                            <em>AVG</em>
                        </span>
                        <span>
                            <strong>Steals</strong>
                            <b>8.9</b>
                            <em>AVG</em>
                        </span>
                        <span>
                            <strong>Blocks</strong>
                            <b>13.6</b>
                            <em>AVG</em>
                        </span>
                    </div>

                    <ul class="kf_table2 kf_tableaside">
                        <li>
                            <div>
                                <span>
                                    2 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    1250
                                </span>
                            </div>
                            <div>
                                <span>
                                    3 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    680
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    2 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    1250
                                </span>
                            </div>
                            <div>
                                <span>
                                    3 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    680
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    2 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    1250
                                </span>
                            </div>
                            <div>
                                <span>
                                    3 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    680
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span>
                                    2 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    1250
                                </span>
                            </div>
                            <div>
                                <span>
                                    3 Points
                                    <em>In his career</em>
                                </span>
                            </div>
                            <div>
                                <span>
                                    680
                                </span>
                            </div>
                        </li>
                    </ul>

                    <div class="kf_progress1">
                        <div class="skill-progress">
                            <span>Shot Accuracy</span>
                            <div class="progressbars" progress="65%"></div>
                        </div>
                        <div class="skill-progress">
                            <span>Pass Accuracy</span>
                            <div class="progressbars" progress="88%"></div>
                        </div>
                        <div class="skill-progress">
                            <span>Total Accuracy</span>
                            <div class="progressbars" progress="75%"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default User;