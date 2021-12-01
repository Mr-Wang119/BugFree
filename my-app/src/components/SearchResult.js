import React, { Component } from 'react';
import axios from "axios";
import { Spin, List } from 'antd';
import '../css/leagueList.css'
import api from '../utils/api';

//List.js
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: new Map(),
            isLoaded: false,
            keyword: ""
        }
    }
    render() {
        if (!this.state.isLoaded) {
            return <Spin delay="1000" />
        } else {
            return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div class="innner_banner" style={{ marginBottom: "20px" }}>
                        <div class="container">
                            <h3>Search Result: {this.state.keyword}</h3>
                        </div>
                    </div>
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.state.teams.names}
                            renderItem={team => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<img src={team.image} alt="" width="40"/>}
                                        title={<a href={"/team/" + team.tid}>{team.name}</a>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
                // <div>
                //     <h2>Team List based on name</h2>
                //     <table className="table table-bordered">
                //     <thead>
                //         <tr>
                //         <th className="text-center">tid</th>
                //         <th className="text-center">name</th>
                //         <th className="text-center">description</th>
                //         <th className="text-center">logo</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <TeamData teams={this.state.teams.names} />
                //     </tbody>
                //     </table>
                //     <h2>Team List based on desc</h2>
                //     <table className="table table-bordered">
                //     <thead>
                //         <tr>
                //         <th className="text-center">tid</th>
                //         <th className="text-center">name</th>
                //         <th className="text-center">description</th>
                //         <th className="text-center">logo</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <TeamData teams={this.state.teams.descs} />
                //     </tbody>
                //     </table>
                // </div>
            )
        }
    }

    componentDidMount() {
        const _this = this;
        this.state.keyword = this.props.match.params.keyword;
        axios.post(api.teamSearch, {
            "keyword": this.state.keyword
        })
            .then(function (response) {
                _this.setState({
                    teams: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                });
            });
    }
}

export default SearchResult;