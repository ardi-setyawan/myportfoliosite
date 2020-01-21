import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HashRouter} from 'react-router-dom';

import Landingpage from './Landingpage';
import Resume from './Resume';
import Contact from './Contact';
import Aboutme from './Aboutme';
import Project from './Project';

const Main =() => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/Aboutme" component={Aboutme}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Project" component={Project}/>
        <Route path="/Resume" component={Resume}/>
    </Switch>
);



export default Main;