import React, { useState } from 'react';
import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';

const Nav = ()=>{
    return(
        <Navbar color="dark" dard expand='md' fixed>
            <div className="container">
                <NavbarBrand className="mr-auto" href='/'>
                    <h3>
                        <i className="fa fa-github"></i>Github
                    </h3>
                </NavbarBrand>
            </div>
        </Navbar>
    )
} 

export default Nav;