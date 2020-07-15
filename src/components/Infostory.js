import React from 'react';

import './Infostory.scss';

const Infostory = ({story, time, topic }) => {
    return (
        <div className="Infostory">
            <div className="topic">{ topic } &middot; {time}</div>
            <h3>{story}</h3>
        </div>
    )
}

export default Infostory;