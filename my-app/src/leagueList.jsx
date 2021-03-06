import React from 'react';
import axios from 'axios';
import {Spin, List} from 'antd';
import './css/leagueList.css'
import api from './utils/api';

class LeagueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: [],
            isReady: false
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get(api.league)
        .then(function (response){
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, leagues: data.detail})
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
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <div class="innner_banner" style={{marginBottom: "20px"}}>
                    <div class="container">
                        <h3>League</h3>
                    </div>
                </div>
                <Spin spinning={!this.state.isReady} delay={500}>
                <div>
                    <LeagueListData leagues={this.state.leagues}/>
                </div>
                </Spin>
            </div>
        );
    }
}

class LeagueListData extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.props.leagues}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    title={<a href={"/league/"+item.lid}>{item.name == 'nan' ? '' : item.name}</a>}
                    description={item.name == 'nan' ? '': item.desc}
                    />
                </List.Item>
                )}
            />
        );
    }
}

export default LeagueList;