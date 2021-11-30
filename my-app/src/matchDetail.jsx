import React from 'react';
import axios from 'axios';
import {Spin} from 'antd';

class MatchDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            match: {}
        }
    }

    componentDidMount() {
        const _this = this;
        let lid = this.props.match.params.id;
        let path = "http://localhost:8080/match/"+lid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, match: data.detail})
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
                <p>{this.state.match.mid}</p>
            </div>
        );
    }
}

export default MatchDetail;