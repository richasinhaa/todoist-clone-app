import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
           <Nav>
           <FaBars />
            <NavMenu>
                <NavLink to="/" activestyle>
                    Inbox
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;