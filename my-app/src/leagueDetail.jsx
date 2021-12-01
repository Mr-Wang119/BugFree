import React from 'react';
import axios from 'axios';
import './css/leagueDetail.css'
import { Table, Spin, Typography } from 'antd';
const { Column } = Table;
const { Text, Title } = Typography;

class LeagueDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            teams: [],
            league: null
        }
    }

    componentDidMount() {
        const _this = this;
        let lid = this.props.match.params.id;
        let path = "http://34.69.39.159:8080/league/"+lid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, teams: data.detail.teams, league: data.detail.league})
            } else {
                window.location.href = '/error';
            }
        })
        .catch(function (error) {
            console.log(error);
            window.location.href = '/error';
        })
    }
    
    render() {
        if (this.state.isReady == false) {
            return (
                <Spin delay="1000"/>
            );
        }
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <div class="innner_banner" style={{marginBottom: "20px"}}>
                    <div class="container">
                        <h3>League Teams</h3>
                    </div>
                </div>
                <div id="leagueText">
                    <div id="leagueText-title">
                        <span>
                            <Title level={3}>{this.state.league.name}</Title>
                        </span>
                    </div>
                    <div id="leagueText-desc">
                        <Text>{this.state.league.desc}</Text>
                    </div>
                </div>
                <div style={{width: "60%", margin: "0 auto"}}>
                    <Table dataSource={this.state.teams}>
                        <Column
                        title="Logo"
                        dataIndex="image"
                        render={img => (<img src={img} alt="" width="100"></img>)}
                        />
                        <Column
                        title="Team"
                        dataIndex="teamName"
                        render={(text, record) => (
                            <a href={"/team/"+record.tid}>{text}</a>
                        )}
                        sorter={(a, b) => a.teamName.localeCompare(b.teamName)}
                        />
                    </Table>
                </div>
            </div>
        );
    }
}

export default LeagueDetail;