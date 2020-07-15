import React from 'react';

import './Searchbox.scss';

const Searchbox = () => {
    return (
        <div className="Searchbox">
            <form>
                <input type="text" placeholder="Search Twitter" />
            </form>
        </div>
    )
}

export default Searchbox;