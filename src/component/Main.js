import React from 'react';
import "../css/main.css";
import Stack_1 from '../img/stack_java.png';
import Stack_2 from '../img/stack_react.png';
import Stack_3 from '../img/stack_mysql.png';
import Stack_4 from '../img/stack_es.png';
import Stack_5 from '../img/stack_rust.png';

const Main = () => {
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
                <p className="post_li_wrap_title">All Posts</p>
                <ul>
                    <li>
                        <div className="content_box">
                            <div className="li_title">
                                <span>Java</span>
                                <p>@JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</p>
                            </div>
                            <p className="li_text">
                                Restful API 데이터를 조회해서 ObjectMapper를 이용해 Object 매핑을 하는데, 해당 데이터의 model에서 빠진 필드가 있는 경우 Unrecognized field 에러가 난다. Json to Java Object..
                            </p>
                            <div className="tag_wrap">
                                <div className="tag">#Java</div>
                                <div className="tag">#SpringFramework</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="content_box">
                            <div className="li_title">
                                <span>Java</span>
                                <p>@JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</p>
                            </div>
                            <p className="li_text">
                                Restful API 데이터를 조회해서 ObjectMapper를 이용해 Object 매핑을 하는데, 해당 데이터의 model에서 빠진 필드가 있는 경우 Unrecognized field 에러가 난다. Json to Java Object..
                            </p>
                            <div className="tag_wrap">
                                <div className="tag">#Java</div>
                                <div className="tag">#SpringFramework</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="content_box">
                            <div className="li_title">
                                <span>Java</span>
                                <p>@JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</p>
                            </div>
                            <p className="li_text">
                                Restful API 데이터를 조회해서 ObjectMapper를 이용해 Object 매핑을 하는데, 해당 데이터의 model에서 빠진 필드가 있는 경우 Unrecognized field 에러가 난다. Json to Java Object..
                            </p>
                            <div className="tag_wrap">
                                <div className="tag">#Java</div>
                                <div className="tag">#SpringFramework</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="content_box">
                            <div className="li_title">
                                <span>Java</span>
                                <p>@JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</p>
                            </div>
                            <p className="li_text">
                                Restful API 데이터를 조회해서 ObjectMapper를 이용해 Object 매핑을 하는데, 해당 데이터의 model에서 빠진 필드가 있는 경우 Unrecognized field 에러가 난다. Json to Java Object..
                            </p>
                            <div className="tag_wrap">
                                <div className="tag">#Java</div>
                                <div className="tag">#SpringFramework</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="content_box">
                            <div className="li_title">
                                <span>Java</span>
                                <p>@JsonIgnoreProperties 어노테이션 - Json to Object Unrecognized field 에러 해결</p>
                            </div>
                            <p className="li_text">
                                Restful API 데이터를 조회해서 ObjectMapper를 이용해 Object 매핑을 하는데, 해당 데이터의 model에서 빠진 필드가 있는 경우 Unrecognized field 에러가 난다. Json to Java Object..
                            </p>
                            <div className="tag_wrap">
                                <div className="tag">#Java</div>
                                <div className="tag">#SpringFramework</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;