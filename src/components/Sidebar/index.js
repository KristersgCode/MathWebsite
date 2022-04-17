import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap, SidebarRoute } from './SideBarElements'
export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>

                    <SidebarLink to="result" onClick={toggle}>
                        Result
                    </SidebarLink>

                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>

                    <SidebarLink to="contact" onClick={toggle}>
                        Contact me
                    </SidebarLink>

                </SidebarMenu>

                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar