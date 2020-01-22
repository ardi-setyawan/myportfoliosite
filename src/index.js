import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Route} from 'react-router-dom';
import Landingpage from './components/Landingpage';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
