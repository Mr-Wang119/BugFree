import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import Homepage from './homepage';
import Login from './login'
import Signup from './signup';
import User from './user'
import Error from './error'
import LeagueList from './leagueList'

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className="layout" style={{ padding: '0' }}>
                <Content style={{ padding: '0' }}>
                    <Switch>
                        <Route exact path="/error" component={Error}></Route>
                        <Route exact path="/" component={Homepage}></Route> 
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/homepage" component={Homepage}></Route>
                        <Route path="/user/:username" component={User}></Route>
                        <Route exact path="/league" component={LeagueList}></Route>
                    </Switch>
                </Content>
            </Layout>
        );
    }
}



export default withRouter(App);