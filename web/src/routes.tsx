import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing/'
import Study from './pages/Study/'
import Giveclasses from './pages/Giveclasses/'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing}/>
            <Route path="/study" component={Study}/>
            <Route path="/giveclasses" component={Giveclasses}/>
        </BrowserRouter>
    )
}