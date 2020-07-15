import React from 'react';

import Infostory from './Infostory';

import './Infobox.scss';

const Infobox = () => {
    return (
        <div className="Infobox">
            <h2>What's happening</h2>
            <Infostory story="Ubisoft Forward 2020" time="1 Hour Ago" topic="Gaming" />
            <Infostory story="Close call as Pickford drops Podence's shot at goal through his legs" time="2 Hours Ago" topic="Soccer" />
            <Infostory story="Sol Campbell" time="2 Hours Ago" topic="Sol Campbell" />
            <Infostory />
            <Infostory />
        </div>
    )
}

export default Infobox;