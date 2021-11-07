import React, { Component } from 'react';
class UserData extends Component {

    render() {
        return (
            this.props.users.map((user, i)=>{
                return (
                    <tr key={user.uin} className="test-center">
                        <td>{user.uin}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.birthday}</td>
                    </tr>
                )
            })
        );
    }
}

export default UserData;