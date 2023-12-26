import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logo from '../img/logo.png';
import Dir from '../img/dir.png';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios
            .get("/blog/categories/5bf00e8a-3222-4cef-a195-8ddd5af0c7c5")
            .then(response => {
                setMenu(response.data.list);
            })
            .catch(e => {
                console.error(e);
            });
    },[])

    return (
        <div className="nav_wrap">
            <div>
            <div className="logo_wrap">
                <Link to="/admin">
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
                    {menu.map(m => {
                        return (
                            <li key={m.id}>
                                <a href="#">{m.name}</a>
                               {m.children.length > 0 ? 
                               <ul className="depth2">
                                    {m.children.map(children => {
                                        return (
                                    <li>
                                        <a href="#">{children.name} <span></span></a>
                                    </li>
                                        )
                                    })}
                                    
                                </ul> : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
            </div>
        </div>
        
    );
};

export default Navigation;