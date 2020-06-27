import React from 'react';
import {BrowserRouter, Redirect, Route,Switch} from 'react-router-dom'; 
import App from './App.js';
import Navbar from './component/Navbar.js'
import UserDetail from './component/UserDetails';

const Routers= ()=>{
    return(
<BrowserRouter>
<Navbar/>
   <Switch>
        <Route path='/' exact render={props=><App {...props} />}/>
        <Route path='/:username' exact render={props=><UserDetail {...props} />}/>
        <Redirect to='/' exact></Redirect>
    </Switch>
</BrowserRouter>
    )
}
export default Routers;