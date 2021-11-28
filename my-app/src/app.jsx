import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Homepage from './homepage';
import Login from './login'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/homepage" component={Homepage}></Route>
                    <Route exact path="/" component={Homepage}></Route> 
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);