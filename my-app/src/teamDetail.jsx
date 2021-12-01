import React from 'react';
import axios from 'axios';
import { Table, Spin} from 'antd';
import api from './utils/api';
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
        let path = api.team+lid;
        axios.get(path)
        .then(function(response) {
            let data = response.data;
            if (data.success == true) {
                _this.setState({isReady: true, players: data.detail.players, team: data.detail.team})
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
            <div>
                    <div class="innner_banner" style={{ marginBottom: "20px" }}>
                        <div class="container">
                            <h3>
                                <img width={100} src={this.state.team.image} alt="team logo"/>    {this.state.team.name}
                            </h3>
                        </div>
                    </div>
                <Spin spinning={!this.state.isReady} delay={500}>
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
                            sorter={(a, b) => a.shortName.localeCompare(b.shortName)}
                        />
                        <Column
                            title="Nation"
                            dataIndex="nationality"
                            sorter={(a, b) => a.nationality.localeCompare(b.nationality)}
                        />
                        <Column
                            title="Position"
                            dataIndex="position"
                            sorter={(a, b) => a.position.localeCompare(b.position)}
                        />
                    </Table>
                </div>
                </Spin>
            </div>
        );
    }
}

export default TeamDetail;