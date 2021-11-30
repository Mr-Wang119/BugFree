import React, { Component } from 'react';
import reactDom from 'react-dom';
import axios from 'axios';

import { Card, Row, Col } from "antd";
import 'antd/dist/antd.css';



class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            matches: new Map(),
            isLoaded: false,
        };
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            const matchList = this.state.matches.map(function (match) {
                return (
                    <Col span={8}>
                        <Card style={{ background: '#ECECEC', }}>
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
                        </Card>
                    </Col>
                )
            });
            return (
                <div className="kode_content_wrap">
                    <div>
                        {/* <!--Banner Thumb START--> */}
                        <div class="thumb">
                            <img src="extra-images/banner1.jpg" alt="" />
                            <div class="container">
                                <div class="banner_caption text-center">
                                    <span>Welcome to SoccorGod !!</span>
                                    <h1>
                                        {this.state.matches[0].hostName} <b>vs</b> {this.state.matches[0].guestName}
                                    </h1>
                                    <p>{this.state.matches[0].time}, {this.state.matches[0].name}</p>
                                    <a href="#" class="btn-1">Check for detail</a>
                                </div>
                            </div>
                        </div>
                        {/* <!--Banner Thumb End--> */}
                    </div>
                    <div className="result_slide_wrap">
                        <div className="result_slider" style={{ padding: '30px' }}>
                            <Row gutter={16}>
                                {matchList}
                            </Row>
                        </div>
                    </div>
                </div>
            );
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8080/recentCompetition', { params: { num: 3 } })
            .then(res => {
                this.setState({
                    isLoaded: true,
                    matches: res.data,
                })
            })
    }
}

export default Homepage;

reactDom.render(<Homepage />, document.getElementById('root'));
