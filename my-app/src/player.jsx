import React from 'react';
import axios from 'axios';
import { Spin} from 'antd';

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
                <div class="widget roster_sidebar">
                    <h6 class="kf_hd1 margin_0">
                        <span>Player Information</span>
                    </h6>
                    <div class="kf_roster_dec">
                        <figure>
                            <img src="extra-images/rooster5.png" alt="" />
                        </figure>
                        <div class="text">
                            <div class="text_overflow">
                                <h3>{this.state.player.name}</h3>
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

export default Player;