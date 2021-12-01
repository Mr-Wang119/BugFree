import React, { Component } from 'react';
import axios from "axios";
import UserData from './UserData';
import api from '../utils/api';

//List.js
class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoaded: false
        }
  }
  render() {
      if (!this.state.isLoaded) {
          return <div>Loading...</div>
      } else {
        return (
            <table className="table table-bordered">
            <thead>
                <tr>
                <th className="text-center">uin</th>
                <th className="text-center">username</th>
                <th className="text-center">email</th>
                <th className="text-center">name</th>
                <th className="text-center">birthday</th>
                </tr>
            </thead>
            <tbody>
                <UserData users={this.state.users} />
            </tbody>
            </table>
        )  
      }
  }

  componentDidMount() {
      const _this = this;
      axios.get(api.test)
        .then(function (response) {
            _this.setState({
                users: response.data,
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

export default UserList;