import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />

            <NavMenu>
            <NavLink to='/about' activeStyle>
                home
            </NavLink>
            <NavLink to='/contact' activeStyle>
                contact
            </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;
