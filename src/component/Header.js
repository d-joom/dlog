import React from 'react';

const header = () => {
    return (
        <div className="top_header">
            <div className="search_wrap">
                <input placeholder='Search'></input>
                <a href="#"><i class="xi-search"></i></a>
            </div>
        </div>
    );
};

export default header;