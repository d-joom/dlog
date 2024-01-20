import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import '../css/main.css';
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

    useEffect(() => {
        axios
            .get(`/blog/${param.userId}`)
            .then(response => {
                console.log(response.data.data.uuid);
                setUserBlog(response.data.data);
                axios
                    .get(`/posts?userBlogId=${response.data.data.uuid}&isDeleted=false&isTemporary=false`)
                    .then(postResponse => {
                        setList(postResponse.data.list);
                    })
                axios
                    .get(`/blog/categories/top/${response.data.data.uuid}`)
                    .then(topResponse => {
                        setTopCategory(topResponse.data.list);
                    })
                    .catch(e => {
                        console.error(e);
                    });
            })
            .catch(e => {
                console.error(e);
            });
    },[])

    return (
        <div className="content">
            <div className="dashboard">
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
            </div>
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