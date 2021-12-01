import React from 'react';
import axios from "axios";

class Competition extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hostName: '', 
            guestName: '', 
            hostUrl: '',
            guest};
        this.submitForm = this.submitForm.bind(this);
    }

    render(){
        return (
            <div>

            </div>
        );
    }
}