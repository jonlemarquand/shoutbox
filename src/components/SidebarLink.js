import React from 'react';

import './SidebarLink.scss';

const SidebarLink = ({ linkName }) => {
    return (
        <div className="SidebarLink">{ linkName }</div>
    )
}

export default SidebarLink;