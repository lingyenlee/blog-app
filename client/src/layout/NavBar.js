import React from 'react'
import { Navbar, NavItem, Icon } from 'react-materialize'

const NavBar = () => {

    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">The Voyager - Blogs for travellers</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="">
                Login
            </NavItem>
            <NavItem href="components.html">
                Register
            </NavItem>
        </Navbar>
    )

}


export default NavBar

