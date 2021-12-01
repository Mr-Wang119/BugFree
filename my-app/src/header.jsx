import axios from 'axios';
import React from 'react';
import SearchInput from './components/SearchInput';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('usernameToken')) {
            if (!this.isLogin) {
                this.login();
            }
            this.setState({isLogin: true})
        } else {
            this.setState({isLogin: false});
        }
    }

    login() {
        let datas = new FormData();
        datas.append('username', localStorage.getItem('usernameToken'));
        datas.append('password', localStorage.getItem('userPassport'));
        axios.post('http://localhost:8080/login', datas, {withCredentials: true});
    }

    logout() {
        axios.get('http://localhost:8080/logout', {'username': localStorage.getItem('username')}, {withCredentials: true});
    }

    render() {
        if (this.state.isLogin) {
            let username = localStorage.getItem('usernameToken');
            return (
                <div className="kode_wrapper"> 
                    <header className="kode_header_2">
                        <div className="kf_top_bar">
                            <div className="container">
                                <div className="kf_right_dec">
                                    <ul className="kf_user">
                                        <li><a href={"/user/"+username}>{username}</a></li>
                                        <li><a onClick={()=>{
                                            this.setState({isLogin: false});
                                            this.logout();
                                            localStorage.removeItem('usernameToken');
                                            localStorage.removeItem('userPassport');
                                            this.props.history.push('/homepage');
                                        }}>Log out</a></li>
                                    </ul>
                                    <a href="#" data-toggle="modal" data-target="#search" className="kode_search"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="kode_logo_bar">
                                <div className="logo">
                                    <a href="/homepage">
                                        <img src="/images/logo.png" alt=""  height="60"/>
                                    </a>
                                </div>
                                <div className="kode_navigation">
                                    <ul className="nav">
                                        <li><a href="/homepage">home</a></li>
                                        <li><a href="/league">league</a></li>
                                        <li><a href="/match">match</a></li>
                                        <li><a href="#links">links</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                        <button className="dl-trigger">Open Menu</button>
                                        <ul className="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="/league">league</a></li>
                                            <li><a href="/match">match</a></li>
                                            <li><a href="#links">links</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SearchInput/>
                    </header>
                </div>
            );
        } else {
            return (
                <div className="kode_wrapper"> 
                    <header className="kode_header_2">
                        <div className="kf_top_bar">
                            <div className="container">
                                <div className="kf_right_dec">
                                    <ul className="kf_user">
                                        <li><a href="/signup"><i className="fa fa-lock"></i>Sign up</a></li>
                                        <li><a href="/login">Login</a></li>
                                    </ul>
                                    <a href="#" data-toggle="modal" data-target="#search" className="kode_search"><i class="fa fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="kode_logo_bar">
                                <div className="logo">
                                    <a href="/homepage">
                                        <img src="/images/logo.png" alt="" height="60"/>
                                    </a>
                                </div>
                                <div className="kode_navigation">
                                    <ul className="nav">
                                        <li><a href="/homepage">home</a></li>
                                        <li><a href="/league">league</a></li>
                                        <li><a href="/match">match</a></li>
                                        <li><a href="#links">links</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                        <button className="dl-trigger">Open Menu</button>
                                        <ul className="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="/league">league</a></li>
                                            <li><a href="/match">match</a></li>
                                            <li><a href="#links">links</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SearchInput/>
                    </header>
                </div>
            );
        }
    }

}

// reactDom.render(<Header/>, document.getElementById('header'));
export default Header;