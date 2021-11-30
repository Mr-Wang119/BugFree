import React, { Component } from 'react';
import SearchInput from './SearchInput';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <header className="kode_header_2">
                {/* <!--Header 2 Top Bar Start--> */}
                <div class="kf_top_bar">
                    <div class="container">
                        <div class="kf_right_dec">
                            <ul class="kf_user">
                                <li><a href="#"><i class="fa fa-lock"></i>Sign up</a></li>
                                <li><a href="#">Login</a></li>
                            </ul>
                            <a href="#" data-toggle="modal" data-target="#search" class="kode_search"><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!--Header 2 Top Bar End--> */}
                <div className="container">
                    {/* <!--Logo Bar Start--> */}
                    <div className="kode_logo_bar">
                        {/* <!--Logo Start--> */}
                        <div className="logo">
                            <a href="#">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        {/* <!--Logo Start--> */}
                        {/* <!--Navigation Wrap Start--> */}
                        <div className="kode_navigation">
                            {/* <!--Navigation Start--> */}
                            <ul className="nav">
                                <li><a href="index.html">home</a></li>
                                <li><a href="blog.html">Discussion</a></li>
                                <li><a href="contactus.html">contact us</a></li>
                            </ul>
                            {/* <!--DL Menu Start--> */}
                            <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                <button className="dl-trigger">Open Menu</button>
                                <ul className="dl-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><a href="blog.html">Discussion</a></li>
                                    <li><a href="contactus.html">contact us</a></li>
                                </ul>
                            </div>
                            {/* <!--DL Menu END--> */}
                            {/* <!--Navigation End--> */}
                            <a href="#" className="kf_cart">
                                <i className="fa fa-money "></i>
                                <div className="text">
                                    <span>Your Points</span>
                                    <em>100</em>
                                </div>
                            </a>
                        </div>
                        {/* <!--Navigation Wrap End--> */}
                    </div>
                    {/* <!--Logo Bar End--> */}
                </div>
                <SearchInput />
                </header>
            </div>
        );
    }
}

export default TopBar;