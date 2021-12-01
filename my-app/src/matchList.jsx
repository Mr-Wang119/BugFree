import axios from 'axios';
import React from 'react';
import { Tabs, Spin } from 'antd';
import { Table, Avatar } from 'antd';


const { TabPane } = Tabs;
const {Column, ColumnGroup} = Table;

class Match extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <div class="innner_banner" style={{ marginBottom: "20px" }}>
                    <div class="container">
                        <h3>
                            Schedule
                        </h3>
                    </div>
                </div>
                <div style={{margin: "10px auto", width: "80%"}}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Coming Soon" key="1">
                            <MatchTablePending/>
                        </TabPane>
                        <TabPane tab="Finished" key="2">
                            <MatchTableFinish/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

class MatchTablePending extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: []
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:8080/match')
        .then(response => {
            _this.setState({
                isReady: true,
                data: response.data.detail.pending
            })
        })
        .catch(error => {
            console.log(error);
            window.location.href = '/error';
        })
    }

    render() {
        return (
            <Spin spinning={!this.state.isReady} delay={500}>
                <Table dataSource={this.state.data} >
                    <Column 
                        title="Date" 
                        dataIndex="time"
                        sorter={(a, b) => a.time.localeCompare(b.time)}
                    />
                    <Column 
                        title="League" 
                        dataIndex="name"
                        sorter={(a, b) => a.name.localeCompare(b.name)}
                    />
                    <Column 
                        title="Host" 
                        dataIndex="hostName"
                        render={(text, record) => (
                            <a href={"/team/"+record.hostTeamId}><img width="50" src={record.hostUrl}/> {text}</a>
                        )}
                    />
                    <Column 
                        title="Guest" 
                        dataIndex="guestName"
                        render={(text, record) => (
                            <a href={"/team/"+record.guestTeamId}><img width="50" src={record.guestUrl}/> {text}</a>
                        )}
                    />
                    <Column title="Location" dataIndex="location"/>
                    <Column 
                        title="Detail" 
                        dataIndex="mid"
                        render={(text) => <a href={"/match/"+text}>View</a>}
                    />
                </Table>
            </Spin>
        );
    };
};

class MatchTableFinish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: []
        }
    }

    componentDidMount() {
        const _this = this;
        axios.get('http://localhost:8080/match')
        .then(response => {
            _this.setState({
                isReady: true,
                data: response.data.detail.finished
            })
        })
        .catch(error => {
            console.log(error);
            window.location.href = '/error';
        })
    }

    render() {
        return (
            <Spin spinning={!this.state.isReady} delay={500}>
                <Table dataSource={this.state.data} >
                    <Column 
                        title="Date" 
                        dataIndex="time"
                        sorter={(a, b) => a.time.localeCompare(b.time)}
                    />
                    <Column 
                        title="League" 
                        dataIndex="name"
                        sorter={(a, b) => a.name.localeCompare(b.name)}
                    />
                    <Column 
                        title="Host" 
                        dataIndex="hostName"
                        render={(text, record) => (
                            <a href={"/team/"+record.hostTeamId}><img width="50" src={record.hostUrl}/> {text}</a>
                        )}
                    />
                    <ColumnGroup title="Result">
                        <Column title="Host" dataIndex="hostScore"/>
                        <Column title="Guest" dataIndex="guestScore"/>
                    </ColumnGroup>
                    <Column 
                        title="Guest" 
                        dataIndex="guestName"
                        render={(text, record) => (
                            <a href={"/team/"+record.guestTeamId}><img width="50" src={record.guestUrl}/> {text}</a>
                        )}
                    />
                    <Column title="Location" dataIndex="location"/>
                    <Column 
                        title="Detail" 
                        dataIndex="mid"
                        render={(text) => <a href={"/match/"+text}>View</a>}
                    />
                </Table>
            </Spin>
        );
    };
};

export default Match;