import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './routes'


export default props =>
    <HashRouter>
        <div className="App">
            
            <Routes />
        </div>
    </HashRouter>