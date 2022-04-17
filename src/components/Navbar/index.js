import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavBarElements"
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle, onHover }) => {
 
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY > 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        
    }

    return (
        <>
            {/* Can change all icon colors */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>MathTeacher</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-40}>About
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="discover" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-40}>Discover
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="services" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-40}>Services
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="contact" smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={40}>Contact me
                                </NavLinks>
                            </NavItem>
                        </NavMenu>


                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar