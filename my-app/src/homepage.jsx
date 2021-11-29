import React from 'react';
class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div class="innner_banner" style={{marginBottom: "20px"}}>
                    <div class="container">
                        <h3>Homepage</h3>
                    </div>
                </div>
                <h1>This is Homepage</h1>
            </div>
        );
    }
}

export default Homepage;