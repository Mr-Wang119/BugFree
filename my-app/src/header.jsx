import React from 'react';

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
                <div className="kode_wrapper"> 
                    <header className="kode_header_2">
                        <div className="kf_top_bar">
                            <div className="container">
                                <div className="kf_right_dec">
                                    <ul className="kf_user">
                                        <li><a href={"/user/"+username}>{username}</a></li>
                                        <li><a onClick={()=>{
                                            this.setState({isLogin: false});
                                            localStorage.removeItem('usernameToken');
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
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">team overview</a></li>
                                        <li><a href="#">team schedule</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">widget</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                        <button className="dl-trigger">Open Menu</button>
                                        <ul className="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="/league">league</a></li>
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
                                        <li><a href="#">shop</a></li>
                                        <li><a href="#">team overview</a></li>
                                        <li><a href="#">team schedule</a></li>
                                        <li><a href="#">contact us</a></li>
                                        <li><a href="#">widget</a></li>
                                    </ul>
                                    <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                        <button className="dl-trigger">Open Menu</button>
                                        <ul className="dl-menu">
                                            <li><a href="/homepage">home</a></li>
                                            <li><a href="/league">league</a></li>
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

// reactDom.render(<Header/>, document.getElementById('header'));
export default Header;