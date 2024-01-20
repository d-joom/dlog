import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import "../css/board.css";
import {Editor} from '@toast-ui/react-editor';
import { useLocation } from "react-router-dom";
import '@toast-ui/editor/toastui-editor.css';

const Write = () => {

    const [menu, setMenu] = useState([]);
    const {state} = useLocation();
    const [form, setForm] = useState({
        title:null,
        contents:null,
        userBlogId:null,
        userBlogCategoryId:null,
        isTemporary:false
    });
    const editorRef = useRef();

    const onUploadImage = async (blob, callback) => {
        await postImage(blob, callback);
        return false;
      };

      const postImage = (blob, callback) => {
        const formData = new FormData();
        formData.append('multipartFile',blob);

        axios.post('/s3/upload', formData, {
            headers: {
             "content-type": "multipart/form-data",
              "token": localStorage.getItem('accessToken')
            }
          })
        .then(response => {
            callback(response.data, blob.name);
        })
        .catch(e => {
            console.error(e);
        });
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
            contents:editorRef.current?.getInstance().getHTML()
        });
      };

      
    const onSubmit = () => {
        axios
            .post(`/post`, null, {
                headers: {
                  "token": localStorage.getItem('accessToken')
                },
                params: form
              })
            .then(response => {
                if(response.data.success) {
                    window.location.replace(`detail/${response.data.data.uuid}`);
                } else {
                    console.log(response.data.message)
                }
            })
            .catch(e => {
                console.error(e);
            });
    }

    const onSelect = (e) => {
        setForm({...form, userBlogCategoryId : e.target.value});
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
        },[])

    return (
        <div className="content">
            <div classNmae="write_wrap">
                <div className="write_title">
                <select name="category" onChange={onSelect}>
                    {menu.map(m => 
                        <option value={m.uuid}>{m.name}</option>
                    )}
                    </select>
                    <input type="text" name="title" className="title_input" placeholder='제목을 입력하세요.' onChange={handleChange}></input>
                </div>
                
                <div className="write_content_wrap">
                    <Editor
                        initialValue=""
                        placeholder='내용을 입력해주세요.'
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={false}
                        ref={editorRef}
                        onChange={editorHandleChange}
                        hooks={{
                            addImageBlobHook: onUploadImage
                          }}
                    />
                </div>
                <div class="btn_wrap">
                    <button className="outline_btn">취소</button>
                    <button className="solid_btn" onClick={onSubmit}>등록</button>
                </div>

            </div>
        </div>
    );
};

export default Write;