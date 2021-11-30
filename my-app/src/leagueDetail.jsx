import React from 'react';
import { Table, Spin } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: 'Logo',
        dataIndex: 'image',
        render: (img) => <img src={img} alt="" width="100"></img>
    },
    {
      title: 'Team',
      dataIndex: 'teamName',
      sorter: true,
      width: '60%',
    }
  ];

class LeagueDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            teams: [],
            league: null
        }
    }

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    componentDidMount() {
        const _this = this;
        let lid = this.props.match.params.id;
        let path = "http://localhost:8080/league/"+lid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, teams: data.detail})
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
            <div className="leagueDetail">
                <Table columns={columns} dataSource={this.state.teams} onChange={this.onChange} />
            </div>
        );
    }
}

export default LeagueDetail;