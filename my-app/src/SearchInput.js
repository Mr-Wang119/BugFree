import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    submit() {
        if (this.props.onSubmit) {
            // var {value} = this.state;
            this.props.onSubmit(this.state.value);
        }
        this.setState({value:''});
    }

    render() {
        return (
            <div className="search-input">
                <span>Search: </span>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.submit.bind(this)}>Search</button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }
}

export default SearchInput;