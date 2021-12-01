import React from 'react';
import axios from "axios";
import { Spin } from 'antd';
import { Descriptions} from 'antd';
import './css/user.css'
import api from './utils/api';

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
            if (username !== usernameInUrl) {
                window.location.href = '/error';
            }
            let path = api.user+username;
            axios.get(path)
            .then(function (response) {
                let data = response.data;
                if (data.success === true) {
                    _this.setState({success: true, info: data.detail});
                } else {
                    window.location.href = '/error';
                }
            })
            .catch(function (error) {
                console.log(error);
                window.location.href = '/error';
            });
        } else {
            this.props.history.go(-1);
        }
    }
    

    render() {
        return (
            <Spin spinning={!this.state.success} delay={500}>
            <Info info={this.state.info}/>
            </Spin>
        );
    }
}


class Info extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{margin: "20px auto", width: "80%"}}>
                <h6 className="kf_hd1 margin_0">
                    <span>User Information</span>
                </h6>
                <div className="kf_roster_dec">
                    <div className="text">
                        <div className="text_overflow">
                            <h3>{this.props.info.username}</h3>
                            <em><i className="fa fa-bitcoin" style={{color: "#ffbe00"}}></i> {this.props.info.points} POINTS</em>
                        </div>
                    </div>
                </div>

                <Descriptions
                    bordered
                    title="Custom Size"
                    >
                    <Descriptions.Item label="Name" span={1.5}>{this.props.info.name}</Descriptions.Item>
                    <Descriptions.Item label="Email" span={1.5}>{this.props.info.email}</Descriptions.Item>
                    <Descriptions.Item label="Birthday" span={1.5}>{this.props.info.birthday}</Descriptions.Item>
                    <Descriptions.Item label="Password">{this.props.info.password}</Descriptions.Item>
                </Descriptions>

                <div id="edit-btn">
                    <button className="btn btn-warning mb-3"><a href={'/edit/'+this.props.info.username}>EDIT</a></button>
                </div>
            </div>
        );
    }
}


export default User;