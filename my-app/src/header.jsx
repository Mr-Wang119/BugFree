import { withRouter } from 'react-router';
import React from 'react';
import reactDom from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('usernameToken')) {
            this.setState({isLogin: true})
        } else {
            this.setState({isLogin: false});
        }
    }

    render() {
        if (this.state.isLogin) {
            let username = localStorage.getItem('usernameToken');
            return (
                <div class="kode_wrapper"> 
                    <header class="kode_header_2">
                        <div class="kf_top_bar">
                            <div class="container">
                                <div class="pull-left">
                                    <ul class="kf_social2">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-github"></i></a></li>
                                    </ul>
                                </div>
                                <div class="kf_right_dec">
                                    <ul class="kf_user">
                                        <li><a href={"/user/"+username}>{username}</a></li>
                                        <li><a onClick={()=>{
                                            this.setState({isLogin: false});
                                            localStorage.removeItem('usernameToken');
                                            this.props.history.push('/homepage');
                                        }}>Log out</a></li>
                                    </ul>
                                    <a href="#" data-toggle="modal" data-target="#search" class="kode_search"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="kode_logo_bar">
                                <div class="logo">
                                    <a href="#">
                                        <img src="images/logo.png" alt="" />
                                    </a>
                                </div>
                                <div class="kode_navigation">
                                    <ul class="nav">
                                        <li><a href="/homepage">home</a></li>
                                        <li><a href="#">blog</a></li>
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">team overview</a></li>
                                        <li><a href="#">team schedule</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">widget</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" class="dl-menuwrapper">
                                        <button class="dl-trigger">Open Menu</button>
                                        <ul class="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="#">shop</a></li>
                                            <li><a href="#">team overview</a></li>
                                            <li><a href="#">team schedule</a></li>
                                            <li><a href="#">contact us</a></li>
                                            <li><a href="#">widget</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        } else {
            return (
                <div class="kode_wrapper"> 
                    <header class="kode_header_2">
                        <div class="kf_top_bar">
                            <div class="container">
                                <div class="pull-left">
                                    <ul class="kf_social2">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-github"></i></a></li>
                                    </ul>
                                </div>
                                <div class="kf_right_dec">
                                    <ul class="kf_user">
                                        <li><a href="/signup"><i class="fa fa-lock"></i>Sign up</a></li>
                                        <li><a href="/login">Login</a></li>
                                    </ul>
                                    <a href="#" data-toggle="modal" data-target="#search" class="kode_search"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="kode_logo_bar">
                                <div class="logo">
                                    <a href="#">
                                        <img src="images/logo.png" alt="" />
                                    </a>
                                </div>
                                <div class="kode_navigation">
                                    <ul class="nav">
                                        <li><a href="/homepage">home</a></li>
                                        <li><a href="#">blog</a></li>
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">team overview</a></li>
                                        <li><a href="#">team schedule</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">widget</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" class="dl-menuwrapper">
                                        <button class="dl-trigger">Open Menu</button>
                                        <ul class="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="#">shop</a></li>
                                            <li><a href="#">team overview</a></li>
                                            <li><a href="#">team schedule</a></li>
                                            <li><a href="#">contact us</a></li>
                                            <li><a href="#">widget</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            );
        }
    }

}

reactDom.render(<Header/>, document.getElementById('header'));
export default withRouter(Header);