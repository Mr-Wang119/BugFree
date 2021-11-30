import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import App from './app';
import reactDom from 'react-dom';
import Header from './header';
import Footer from './footer'


reactDom.render(
    <BrowserRouter>
        <Header />
        <App />
        <Footer/>
    </BrowserRouter>
    , document.getElementById('root'));
