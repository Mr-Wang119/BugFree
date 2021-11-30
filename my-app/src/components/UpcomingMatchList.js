import React, { Component } from 'react';
import axios from 'axios';


class UpcomingMatchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: new Map(),
        };
    }

    render() {
        if (this.state.matches.size == 0) {
            return <div>Loading...</div>
        } else {
            const matchList = this.state.matches.map(function (match) {
                return (
                    <div>
                        <div className="kf_result_thumb" id={match.mid}>
                            <span>{match.time}</span>
                            <div class="kf_result">
                                <div class="figure pull-left">
                                    <figure >
                                        <img src={match.hostUrl} alt="" />
                                    </figure>
                                    <a href="#">{match.hostName}</a>
                                </div>
                                <span>vs</span>
                                <div class="figure pull-right">
                                    <figure >
                                        <img src={match.guestUrl} alt="" />
                                    </figure>
                                    <a href="#">{match.guestName}</a>
                                </div>
                            </div>
                            <a href="#">{match.name}</a>
                        </div>
                    </div>
                )
            });
            return (
                <div className="result_slider">
                    {matchList}
                </div>
            )
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/recentCompetition', { params: { num: 10 } })
            .then(res => {
                this.setState({
                    matches: res.data,
                })
            })
    }
}

export default UpcomingMatchList;