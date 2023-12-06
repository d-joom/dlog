import React from 'react';
import Logo from '../img/logo.png';
import Dir from '../img/dir.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav_wrap">
            <div>
            <div className="logo_wrap">
                <Link to="/">
                    <img src={Logo} alt="logo image"/><p>DEV</p>
                    <img src={Dir} alt="logo dir image"/><p>PLANA</p>
                </Link>
            </div>
            <div className="profile_wrap">
                <div className="profile_img">
                
                </div>
                <div className="profile_name">
                    Jumin Kim
                </div>
                <div className="profile_description">
                    3년차 백엔드 개발자<br/>
                    Java / React
                </div>
                <div className="career_btn">
                    <button>Career<i class="xi-angle-right-min ml-5"></i></button>
                </div>
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
                                <a href="#" class="depth2_active">Vue.js <span>(12)</span></a>
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
        </div>
        
    );
};

export default Navigation;