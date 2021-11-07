import React, { Component } from 'react';
// import UserList from './UserList';
import reactDom from 'react-dom';
import TeamList from './TeamList';
import SearchInput from './SearchInput';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    printContent(keyword) {
        this.setState({
            value:keyword
        });
        reactDom.render(<TeamList keyword={keyword}/>, document.getElementById('subtable'));
    }

  render() {
    return (
        <div className="container">
            <SearchInput onSubmit={this.printContent.bind(this)} />
        </div>
    );
    }
}

export default App;

reactDom.render(<App />, document.getElementById('root'));
