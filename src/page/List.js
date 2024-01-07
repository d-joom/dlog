import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "../css/main.css";


const List = () => {

    const [list, setList] = useState([]);
    const navigate = useNavigate();

    const param = useParams();
    const {state} = useLocation();

    useEffect(() => {
        axios
            .get(`/posts?userBlogCategoryId=${param.uuid}`)
            .then(response => {
                setList(response.data.list);
            })
            .catch(e => {
                console.error(e);
            });

        
    },[param.uuid])

    return (
        <div className="content">
            <div className="post_li_wrap">
                <p className="post_title">{state.name}<span>(13)</span></p>
                <ul>
                    {list.map(post => {
                        return (
                            <li>
                                <div className="content_box">
                                    <div className="li_title">
                                        <span>{post.userBlogCategoryId}</span>
                                        <p>{post.title}</p>
                                    </div>
                                    <p className="li_text" dangerouslySetInnerHTML = {{__html:post.contents}}>
                                    </p>
                                    <div className="tag_wrap">
                                        {/* <div className="tag">#Java</div>
                                        <div className="tag">#SpringFramework</div> */}
                                    </div>
                                </div>
                            </li>
                    )})}
                </ul>
            </div>
            <div className="pagination">
                <div className="page_arrow prev">이전</div>
                <div className="page_num active">1</div>
                <div className="page_num">2</div>
                <div className="page_num">3</div>
                <div className="page_num">4</div>
                <div className="page_num">5</div>
                <div className="page_arrow next">다음</div>
            </div>
        </div>
    );
};

export default List;