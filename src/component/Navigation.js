import React, {useEffect, useState} from 'react';
import Logo from '../img/logo.png';
import Profile from '../img/profile.png';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { get } from '../services/apiService';

const Navigation = () => {

    const [menu, setMenu] = useState([]);
    const [user, setUser] = useState([]);
    const param = useParams();
    const navigate = useNavigate();

    const movePage = (url, e) => {
        navigate(url, {
            state: user
        });
    }

    const moveList = (url, e) => {
        navigate(url, {
            state: e
        });
    }

    const fetchCategory = async () => {
        try {
          // apiService에서 정의한 get 함수 호출
          const category = await get(`/blog/categories/${param.userId}`);
          setMenu(category.list);
        } catch (error) {
          console.error('Error fetching users:', error);
          // 오류 처리
        }
    };

    const fetchUser = async () => {
        try {
          // apiService에서 정의한 get 함수 호출
          const userDate = await get(`/user/id?userId=${param.userId}`);
          setUser(userDate.data);
        } catch (error) {
          console.error('Error fetching users:', error);
          // 오류 처리
        }
    };

    useEffect(() => {
        fetchCategory();
        fetchUser();
    },[user]);

    return (
        <div className="nav_wrap">
            <div>
            <div className="logo_wrap">
                <a onClick={() => movePage(`/${param.userId}`)}>
                    <img src={Logo} alt="logo image"/><p>Plana</p>
                </a>
            </div>
            <div className="profile_wrap">
                <div className="profile_img">
                    {user.picture != null ? <img src={user.picture}/> : <img src={Profile}/>}
                </div>
                <div className="profile_name">
                    {user.name}
                </div>
                <div className="profile_description">
                    {user.description}
                </div>
                <div className="career_btn">
                    <button onClick={() => movePage(`${param.userId}/career`)}>Career<i class="xi-angle-right-min ml-5"></i></button>
                </div>
                {localStorage.getItem('accessToken') == null ? null : 
                <div className="profile_btn_wrap">
                    <div className="post_write"><button onClick={() => movePage(`${param.userId}/write`)}><i className="xi-pen"></i>글 작성</button></div>
                    <div className="user_setting"><button onClick={() => movePage(`${param.userId}/setting`)}><i className="xi-cog"></i>내 정보</button></div>
                    {/* <div className="category_setting"><button onClick={() => movePage(`${param.userId}/menu`)}>메뉴설정</button></div> */}
                </div>}
                
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
                                        <button onClick={() => moveList(`${param.userId}/list/${children.uuid}`, children.name)}>{children.name} <span></span></button>
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