import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Homepage from './homepage';
import Login from './login'
import Signup from './signup';
import User from './user'
import Header from './header';
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Content className="app-content">
                    <Switch>
                        <Route exact path="/" component={Homepage}></Route> 
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/homepage" component={Homepage}></Route>
                        <Route path="/user/:username" component={User}></Route>
                    </Switch>
                </Content>
            </div>
        );
    }
}



export default withRouter(App);