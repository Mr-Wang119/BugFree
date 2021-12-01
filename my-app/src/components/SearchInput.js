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
        console.log(this.state.value);
        if (this.props.onSubmit) {
            // var {value} = this.state;
            this.props.onSubmit(this.state.value);
        }
        this.setState({ value: '' });
    }

    render() {
        return (
            <div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="search">
                <div class="modal-dialog" role="document">
                    <div class="input_dec">
                        <input type="text" placeholder="Input team name, like 'Manchester'" value={this.state.value} onChange={this.handleChange} />
                        <button class="btn_icon" onClick={()=>window.location.href='/search/'+this.state.value}><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
}

export default SearchInput;