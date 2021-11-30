import React, { Component } from 'react';
class TeamData extends Component {

    render() {
        return (
            this.props.teams.map((team, i)=>{
                return (
                    <tr key={team.tid} className="test-center">
                        <td>{team.tid}</td>
                        <td>{team.name}</td>
                        <td>{team.description}</td>
                        <img src={team.image} alt="logo" className="logo-img" width="50" height="50"/>
                    </tr>
                )
            })
        );
    }
}

export default TeamData;