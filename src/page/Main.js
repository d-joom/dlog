import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css/main.css';
import Stack_1 from '../img/stack_java.png';
import Stack_2 from '../img/stack_react.png';
import Stack_3 from '../img/stack_mysql.png';
import Stack_4 from '../img/stack_es.png';
import Stack_5 from '../img/stack_rust.png';

const Main = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios
            .get("/posts?userBlogId=5bf00e8a-3222-4cef-a195-8ddd5af0c7c5&isDleted=false&isTemporary=false")
            .then(response => {
                setList(response.data.list);
                console.log(response.data.list);
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
                        <li>
                            <div className="stack_num">1</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_1} alt="logo image"/>
                            </div>
                            <p>Java<span>(32)</span></p>
                        </li>
                        <li>
                            <div className="stack_num">2</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_2} alt="logo image"/>
                            </div>
                            <p>React.js<span>(27)</span></p>
                        </li>
                        <li>
                            <div className="stack_num">3</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_3} alt="logo image"/>
                            </div>
                            <p>MySQL<span>(26)</span></p>
                        </li>
                        <li>
                            <div className="stack_num">4</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_4} alt="logo image"/>
                            </div>
                            <p>Elastic Search<span>(22)</span></p>
                        </li>
                        <li>
                            <div className="stack_num">5</div>
                            <div className="dashboard_logo_wrap">
                                <img src={Stack_5} alt="logo image"/>
                            </div>
                            <p>Rust<span>(7)</span></p>
                        </li>
                    </ul>
                </div>
                <div className="content_box">
                    <p className="dashboard_title">Weekly Best Postings</p>
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
                            <div className="content_box">
                                <div className="li_title">
                                    <span>Java</span>
                                    <p>{post.title}</p>
                                </div>
                                <p className="li_text">
                                    {post.contents}
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