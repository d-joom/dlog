import React from 'react';
import "../css/board.css";
import {Editor} from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';

const Write = () => {
    return (
        <div className="content">
            <div classNmae="write_wrap">
                <div className="write_title">
                    <select name="category">
                        <option value="network">네트워크</option>
                        <option value="sql">SQL</option>
                        <option value="java">JAVA</option>
                        <option value="react">리액트</option>
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