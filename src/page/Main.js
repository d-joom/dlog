import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../css/main.css';
import { get } from '../services/apiService';
import Stack_1 from '../img/stack_java.png';
import Stack_2 from '../img/stack_react.png';
import Stack_3 from '../img/stack_mysql.png';
import Stack_4 from '../img/stack_es.png';
import Stack_5 from '../img/stack_rust.png';

const Main = () => {

    const [list, setList] = useState([]);
    const [userBlog, setUserBlog] = useState();
    const [topCategory, setTopCategory] = useState();
    const navigate = useNavigate();

    const param = useParams();

    const goDetail = (e) => {
        navigate(`detail/${e}`, {
            state: userBlog
        });
    }

    const fetchPosts = async () => {
        try {
          const data = await get(`/posts?userId=${param.userId}&isDeleted=false&isTemporary=false`);
          setList(data.list);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };

    const fetchTopCategory = async () => {
        try {
          const data = await get(`/blog/categories/top/${param.userId}`);
          setTopCategory(data.list);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
        fetchTopCategory();
        
    },[])

    return (
        <div className="content">
            {/* <div className="dashboard">
                <div className="content_box">
                    <p className="dashboard_title">Blog Top Topic</p>
                    <ul>
                    {topCategory?.map((categoryRank, index) => (
                        <li key={index}>
                            <div className="stack_num">{index + 1}</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_1} alt="logo image"/>
                            </div>
                            <p>{categoryRank.name}<span>({categoryRank.postCount})</span></p>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="content_box">
                    <p className="dashboard_title">Weekly Top Postings</p>
                    <ul>
                        <li><div>1</div>JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</li>
                        <li><div>2</div>JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</li>
                        <li><div>3</div>JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</li>
                    </ul>
                </div>
            </div> */}
            <div className="post_li_wrap">
                <p className="post_title">All Posts</p>
                <ul>
                    {list.map(post => {
                        return (<li key={post.id}>
                            <div className="content_box" onClick={() => goDetail(post.uuid)}>
                                <div className="li_title">
                                    <span>Java</span>
                                    <p>{post.title}</p>
                                </div>
                                <p className="li_text">
                                    <div dangerouslySetInnerHTML = {{__html:post.contents}} />
                                </p>
                                <div className="tag_wrap">
                                    <div className="tag"></div>
                                    <div className="tag"></div>
                                </div>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Main;