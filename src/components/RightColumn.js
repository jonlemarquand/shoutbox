import React from 'react';

import Infobox from './Infobox';
import Searchbox from './Searchbox';

import './RightColumn.scss';

const RightColumn = () => {
    return (
        <div className="RightColumn">
            <Searchbox />
            <Infobox />
        </div>
    ) 
}

export default RightColumn;