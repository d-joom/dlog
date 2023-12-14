import React from 'react';
import "../css/main.css";
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
                    <input type="text" className="title_input"></input>
                </div>
                
                <div className="write_content_wrap">
                    <Editor
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default Write;