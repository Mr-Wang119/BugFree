import React from 'react';
import axios from 'axios';
import { Table, Spin} from 'antd';
const { Column } = Table;

class TeamDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            players: [],
            team: {}
        }
    }

    componentDidMount() {
        const _this = this;
        let lid = this.props.match.params.id;
        let path = "http://localhost:8080/team/"+lid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, players: data.detail.players, team: data.detail.team})
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
                <div>
                    <h6 className="kf_hd1 margin_0">
                        {this.state.team.name}
                    </h6>
                </div>
                <div style={{margin: "0 auto", width: "60%"}}>
                <meta name="referrer" content="no-referrer" />
                    <Table dataSource={this.state.players}>
                        <Column
                            title="Player"
                            dataIndex="playerImage"
                            render={img => (<img src={img} alt="" width="100"></img>)}
                        />
                        <Column
                            title="Name"
                            dataIndex="shortName"
                            render={(text, record) => (
                                <a href={"/player/"+record.pid}>{text}</a>
                        )}
                        />
                        <Column
                            title="Nation"
                            dataIndex="nationality"
                        />
                        <Column
                            title="Position"
                            dataIndex="position"
                        />
                    </Table>
                </div>
            </div>
        );
    }
}

export default TeamDetail;