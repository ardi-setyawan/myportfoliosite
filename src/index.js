import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter, Route,} from 'react-router-dom';
import Exchange from 'react-dom'

ReactDOM.render(
    
    <BrowserRouter basename="Landingpage">
        <Route exact path ="/" componennt={Exchange}></Route>
    <App />
    </BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
