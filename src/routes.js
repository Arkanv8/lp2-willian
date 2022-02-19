import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import register from './components/register.js';
import login from './components/login.js';

export default props =>
    <Switch>
        <Route exact path='/' component={login} />
        <Route exact path='/register' component={register} />



    </Switch>