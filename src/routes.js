import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import register from '../components/register.js'
import App from '../components/App.js'

export default props =>
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/register' component={register} />




        <Redirect from='*' to='/' />
    </Switch>