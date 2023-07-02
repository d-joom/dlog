import React from 'react';
import Logo from '../img/logo.png';
import Dir from '../img/dir.png';

const Navigation = () => {
    return (
        <div className="nav_wrap">
            <div className="logo_wrap en_font">
                <a href="#">
                    <img src={Logo} alt="logo image"/><p>DEV</p>
                    <img src={Dir} alt="logo dir image"/><p>PLANA</p>
                </a>
            </div>
            <div className="profile_wrap">
                <div className="profile_img">
                
                </div>
                <div className="profile_name">
                    Jumin Kim
                </div>
                <div className="profile_description">
                    3년차 백엔드 개발자<br/>
                    Java / Spring Framework / Rust / React
                </div>
                <div className="career_btn">Career</div>
            </div>
            <div className="category_wrap">
                <ul className="depth1">
                    <li>
                        <a href="#">Front-End</a>
                        <ul className="depth2">
                            <li>
                                <a href="#">React.js <span>(12)</span></a>
                            </li>
                            <li>
                                <a href="#">Vue.js <span>(12)</span></a>
                            </li>
                            <li>
                                <a href="#">html <span>(12)</span></a>
                            </li>
                            <li>
                                <a href="#">CSS <span>(12)</span></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Back-End</a>
                    </li>
                    <li>
                        <a href="#">Server</a>
                    </li>
                    <li>
                        <a href="#">DataBase</a>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};

export default Navigation;