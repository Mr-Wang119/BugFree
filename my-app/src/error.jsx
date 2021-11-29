import React from 'react'
import { Alert } from 'antd'

class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert" style={{margin: "20px auto", width: '40%'}}>
                    <h1 className="alert-danger">Woops!</h1> 
                    <p>Something went wrong...</p>
                    <p>
                        You can click <a href="#" className="alert-link" onClick={()=>{this.props.history.push('/homepage');}}>here</a> to HOMEPAGE.
                    </p>
                </div>
            </div>
        );
    }
}

export default Error;