import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logo from '../img/logo.png';
import Dir from '../img/dir.png';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";

const Navigation = () => {

    const [menu, setMenu] = useState([]);
    const [user, setUser] = useState([]);
    const param = useParams();
    const navigate = useNavigate();

    const goCategoryPage = (e) => {
        navigate(`${param.userId}/list/${e.uuid}`, {
            state: e
        });
    }

    const goSettingPage = () => {
        navigate(`${param.userId}/setting`, {
            state: user
        });
    }

    const goSettingCategoryPage = () => {
        navigate(`${param.userId}/menu`, {
            state: menu
        });
    }

    const goWritePage = () => {
        navigate(`${param.userId}/write`, {
            state: user
        });
    }

    useEffect(() => {
        axios
            .get("/blog/categories/5bf00e8a-3222-4cef-a195-8ddd5af0c7c5")
            .then(response => {
                setMenu(response.data.list);
            })
            .catch(e => {
                console.error(e);
            });

        axios
            .get(`/user/id?userId=${param.userId}`)
            .then(response => {
                setUser(response.data.data);
            })
            .catch(e => {
                console.error(e);
            });
    },[]);

    return (
        <div className="nav_wrap">
            <div>
            <div className="logo_wrap">
                <Link to="/admin">
                    <img src={Logo} alt="logo image"/><p>Plana</p>
                </Link>
            </div>
            <div className="profile_wrap">
                <div className="profile_img">
                    <img src={user.picture}/>
                </div>
                <div className="profile_name">
                    {user.name}
                </div>
                <div className="profile_description">
                    {user.description}
                </div>
                <div className="career_btn">
                    <button>Career<i class="xi-angle-right-min ml-5"></i></button>
                </div>
                <div className="profile_btn_wrap">
                    <div className="post_write"><button onClick={() => goWritePage()}>글쓰기</button></div>
                    <div className="user_setting"><button onClick={() => goSettingPage()}>유저설정</button></div>
                    <div className="category_setting"><button onClick={() => goSettingCategoryPage()}>메뉴설정</button></div>
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
                                    {m.children?.map(children => {
                                        return (
                                    <li>
                                        <button onClick={() => goCategoryPage(children)}>{children.name} <span></span></button>
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