import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import frontpage from './components/frontpage.js';
import login from './components/login.js';
import register from './components/register.js';

export default props =>
    <Switch>
        <Route exact path='/' component={frontpage} />
        <Route exact path='/login' component={login} />
        <Route exact path='/register' component={register} />



    </Switch>