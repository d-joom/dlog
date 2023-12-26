import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {Editor} from '@toast-ui/react-editor';
import { useLocation } from "react-router-dom";
import '@toast-ui/editor/toastui-editor.css';
import "../css/main.css";

import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {

    const param = useParams();
    const uuid = param.uuid;

    const editor = useRef();

    const navigate = useNavigate();
    const {state} = useLocation();

    const [post, setPost] = useState();
    const [menu, setMenu] = useState();
    const [action, setAction] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [form, setForm] = useState();

    const onAction = () => {
        setAction(!action);
    }

    const modifyPost = () => {
        axios
            .get(`/blog/categories/${state.uuid}`)
            .then(response => {
                
                setMenu(response.data.list);
                setIsModify(!isModify);
            })
            .catch(e => {
                console.error(e);
            });
        
    }

    const onModify = () => {

        axios
            .put(`/post/${uuid}`, null, {
                headers: {
                  "token": localStorage.getItem('accessToken')
                },
                params: form
              })
            .then(response => {
                console.log(response);
                window.location.replace(`/detail/${uuid}`);
            })
            .catch(e => {
                console.error(e);
            });
    }

    const cancelModify = () => {
        if (window.confirm("수정을 취소하시겠습니까? 현재 내용은 저장되지 않습니다.")) {
            setIsModify(false);
        }
    }

    const handleChange = e => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }

      const editorHandleChange = () => {
        setForm({
            ...form,
            contents:editor.current?.getInstance().getHTML()
        })
      };

    const deletePost = () => {
        if (window.confirm("게시물을 삭제하시겠습니까?")) {
            // axios
            // .delete(`/post/${uuid}`)
            // .then(response => {
            //     setPost(response.data.data);
            // })
            // .then(() => {
            //     alert("삭제되었습니다.");
            //     navigate('/');
            // })
            // .catch(e => {
            //     console.error(e);
            // });
            alert("삭제되었습니다");
            navigate('/');
          } else {
            alert("취소합니다.");
          }

    }

    useEffect(() => {
        axios
        .get(`/post/${uuid}`)
        .then(response => {
            setPost(response.data.data);
            setForm({
                userBlogId: null,
                userBlogCategoryId: null,
                title : response.data.data.title,
                contents : response.data.data.contents,
                isTemporary : false
            });
        })
        .catch(e => {
            console.error(e);
        });
    },[uuid])


    return (
        <div className="content">
            {post ?
            (isModify ?
            <div classNmae="write_wrap">
                <div className="write_title">
                    <select name="category">
                    {menu.map(m => 
                        <option value={m.key}>{m.name}</option>
                    )}
                    </select>

                    <input type="text" name="title" className="title_input" placeholder='제목을 입력하세요.' value={form.title} onChange={handleChange}></input>
                </div>
                
                <div className="write_content_wrap">
                    <Editor
                        name="contents"
                        ref={editor}
                        initialValue={form.contents}
                        placeholder='내용을 입력해주세요.'
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={false}
                        onChange={editorHandleChange}
                    />
                </div>
                <div class="btn_wrap">
                    <button className="outline_btn" onClick={cancelModify}>취소</button>
                    <button className="solid_btn" onClick={onModify}>수정</button>
                </div>
            </div>
            :
            <div classNmae="post_detail_wrap">
                <div className="post_title"> 
                    {post.title}
                </div>
                <div className="post_sub">
                    <div className="post_sub_left">
                        <div className="post_writer">{post.createdBy}</div>
                        <div className="post_date">{post.createdTimeAt}</div>
                    </div>
                    <div className="post_actions"><button onClick={onAction}>Action</button>
                    {action? 
                    <div className="action_wrap">
                        <button className="modify" onClick={modifyPost}>수정</button>
                        <button className="delete" onClick={deletePost}>삭제</button>
                    </div> : null}</div>
                    
                </div>
                <div className="post_content_wrap">
                    <div dangerouslySetInnerHTML = {{__html:post.contents}} />
                </div>
            </div>)
            : null}
        </div>
    );
};

export default Detail;