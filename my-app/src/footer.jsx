import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <footer className="kode_footer_2">
                    <div className="container">
                        <span className="go-up">
                            <i className="fa fa-angle-up"></i>
                        </span>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="widget widget_text">
                                    <div className="logo">
                                        <a href="/homepage"><img src="/images/logo.png" alt="" height="60"/></a>
                                    </div>
                                    <p>Soccer God, designed for CS411.</p>
                                    <ul className="kf_contact_meta">
                                        <li>
                                            <span className="icon-placeholder"></span>
                                            <address>University of Illinois at Urbana-Champaign, Urbana, Illinois, US</address>
                                        </li>
                                        <li>
                                            <span className="icon-mail"></span>
                                            <p>soccergod@illinois.edu</p>
                                        </li>
                                        <li>
                                            <span className="icon-technology"></span>
                                            <p>+1 (217) 123-456</p>
                                        </li>
                                    </ul>
                                </div>
                            
                            </div>
                            <div className="col-md-6">
                                <div className="widget widget_link2">
                                    <h2 className="kf_hd7">Useful link</h2>
                                    
                                    <ul className="links_dec links_dec2">
                                        <li><a href="https://www.fifa.com/">FIFA</a></li>
                                        <li><a href="https://www.uefa.com/">UEFA</a></li>
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copy_right3">
                    <div className="container">
                        <p>Copyright &copy; 2021.Bug Free All rights reserved.</p>
                    </div>
                </div>
        </div>
        );
    }
}

export default Footer;