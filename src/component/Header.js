import React from 'react';

const header = () => {

    const logout = () => {
        localStorage.clear();
    }
    return (
        <div className="top_header">
            <div className="search_wrap">
                <input placeholder='Search'></input>
                <a href="#"><i class="xi-search"></i></a>
            </div>
            {localStorage.getItem('accessToken') == null ? 
            <a className="login_btn" href="/login">login</a>
            : 
            <div>
            <a className="login_btn" href="" onClick={() => logout()}>logout</a>
            {/* <p>{localStorage.getItem('accessToken')}</p> */}
            </div>
            }
            
        </div>
    );
};

export default header;