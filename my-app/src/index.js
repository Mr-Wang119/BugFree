import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './app';
import reactDom from 'react-dom'

reactDom.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
);
