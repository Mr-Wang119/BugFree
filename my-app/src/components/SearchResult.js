import React, { Component } from 'react';
import axios from "axios";
import TeamData from './TeamData';

//List.js
class SearchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            teams: new Map(),
            isLoaded: false,
            keyword: ""
        }
  }
  render() {
      if (!this.state.isLoaded) {
          return <div>Loading...</div>
      } else {
        return (
            <div>
                <h2>Team List based on name</h2>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th className="text-center">tid</th>
                    <th className="text-center">name</th>
                    <th className="text-center">description</th>
                    <th className="text-center">logo</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamData teams={this.state.teams.names} />
                </tbody>
                </table>
                <h2>Team List based on desc</h2>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th className="text-center">tid</th>
                    <th className="text-center">name</th>
                    <th className="text-center">description</th>
                    <th className="text-center">logo</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamData teams={this.state.teams.descs} />
                </tbody>
                </table>
            </div>
        )  
      }
  }

  componentDidMount() {
      const _this = this;
      this.state.keyword = this.props.match.params.keyword;
      axios.post('http://localhost:8080/search/keyword', {
          "keyword": this.state.keyword})
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