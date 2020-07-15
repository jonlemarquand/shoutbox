import React from 'react';

import SidebarLink from './../../components/SidebarLink';

import './Sidebar.scss';

const Sidebar = () => {
    return (
    <div className="Sidebar">
        <nav>
            <SidebarLink linkName="Home"/>
            <SidebarLink linkName="Explore"/>
            <SidebarLink linkName="Notifications"/>
            <SidebarLink linkName="Messages"/>
            <SidebarLink linkName="Bookmarks"/>
            <SidebarLink linkName="Lists"/>
            <SidebarLink linkName="Profile"/>
            <SidebarLink linkName="More"/>
        </nav>
    </div>
    )
}

export default Sidebar;