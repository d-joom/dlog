import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "../css/board.css";
import {Editor} from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

const Write = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios
            .get("/blog/categories/5bf00e8a-3222-4cef-a195-8ddd5af0c7c5")
            .then(response => {
                setMenu(response.data.list);
                console.log(response.data);
            })
            .catch(e => {
                console.error(e);
            });
    },[])

    return (
        <div className="content">
            <div classNmae="write_wrap">
                <div className="write_title">
                    <select name="category">
                        {menu.map(m => {
                            return (
                                <option value={m.key}>{m.name}</option>
                            )}
                        )}
                    </select>
                    <input type="text" className="title_input" placeholder='제목을 입력하세요.'></input>
                </div>
                
                <div className="write_content_wrap">
                    <Editor
                        initialValue="hello react editor world!"
                        placeholder='내용을 입력해주세요.'
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={false}
                    />
                </div>
                <div class="btn_wrap">
                    {/* <button className="outline_btn">임시저장</button> */}
                    <button className="solid_btn">등록</button>
                </div>

            </div>
        </div>
    );
};

export default Write;