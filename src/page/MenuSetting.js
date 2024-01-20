import React, {useEffect, useState, useRef, useCallback} from 'react';
import axios from 'axios';
import "../css/board.css";
import "../css/menuSetting.css";
import {Editor} from '@toast-ui/react-editor';
import Profile from '../img/profile.png';
import { useLocation } from "react-router-dom";

const MenuSetting = () => {

    const {state} = useLocation();

    // const [form, setForm] = useState({
    //     picture : state.picture ? state.picture : Profile,
    //     name : state.name,
    //     description: state.description
    // });

    // const onSubmit = () => {
    //     axios
    //         .put(`/user/${state.uuid}`, null, {
    //             headers: {
    //               "token": localStorage.getItem('accessToken'),
    //               "Content-Type": "application/json",
    //                 Accept: "application/json",
    //             },
    //             params: form
    //           })
    //         .then(response => {
    //             console.log(response);
    //             alert("수정이 완료되었습니다.");
    //         })
    //         .catch(e => {
    //             console.log("---------------");
    //             console.error(e);
    //         });

    // }

    // const onUploadImage = async (e, callback) => {

    //     const formData = new FormData();  // formData 생성
    //     formData.append('multipartFile', e.target.files[0]);  // 이미지 파일 값 할당

    //     await postImage(formData, callback);
    //     return false;
    //   };

    // const postImage = (formData, callback) => {

    //     axios.post('/s3/upload', formData, {
    //         headers: {
    //          "content-type": "multipart/form-data",
    //           "token": localStorage.getItem('accessToken')
    //         }
    //       })
    //     .then(response => {
    //         setForm({...form, picture : response.data});
    //     })
    //     .catch(e => {
    //         console.error(e);
    //     });
    //   }

    // const onChange = (e) => {
    //     const {value, name} = e.target;
    //     setForm({
    //         ...form,
    //         [name] : value
    //     });
    // };

    // const onSubmitHandler = (e) => {
    //     //버튼 리프레시 방지
    //     e.preventDefault();
    //     let body = {
    //         name: form.name,
    //         description: form.description,
    //         picture : form.picture
    //     }
    //     console.log(form);
    //     onSubmit();
        
    // }

    useEffect(() => {
        console.log(state);
        },[])

    return (
        <div className="content">
            <div className="content_title">
                    카테고리 메뉴 설정
                </div>
            <div className="content_box">
                
                <div className="category_setting_wrap">
                    <ul className="depth1">
                        {state.map(m => {
                            return (
                                <li key={m.id}>
                                    {m.name} <span className="add_menu_btn">+추가</span>
                                {m.children.length > 0 ? 
                                <ul className="depth2">
                                        {m.children?.map(children => {
                                            return (
                                        <li>
                                            {children.name} <span></span>
                                        </li>
                                            )
                                        })}
                                        
                                    </ul> : null}
                                </li>
                            )
                        })}
                    </ul>
                    <form className="user_form">
                        <div className="input_wrap">
                            <div className="menu_input">
                                <input name="menu" type="text"></input>
                            </div>
                        </div>
                        <div class="btn_wrap">
                            <button className="outline_btn">취소</button>
                            <button type="submit" className="solid_btn">등록</button>
                        </div>
                    </form>
                    <div className="add_menu_btn">+추가</div>
                </div>
                
            </div>
        </div>
    );
};

export default MenuSetting;