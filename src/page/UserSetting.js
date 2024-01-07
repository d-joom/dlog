import React, {useEffect, useState, useRef, useCallback} from 'react';
import axios from 'axios';
import "../css/board.css";
import {Editor} from '@toast-ui/react-editor';
import Profile from '../img/profile.png';
import { useLocation } from "react-router-dom";

const UserSetting = () => {

    const {state} = useLocation();

    const [imageSrc, setImageSrc] = useState(state.picture ? state.picture : Profile);

    const onUploadImage = async (e, callback) => {

        const formData = new FormData();  // formData 생성
        formData.append('multipartFile', e.target.files[0]);  // 이미지 파일 값 할당

        await postImage(formData, callback);
        return false;
      };

    const postImage = (formData, callback) => {

        axios.post('/s3/upload', formData, {
            headers: {
             "content-type": "multipart/form-data",
              "token": localStorage.getItem('accessToken')
            }
          })
        .then(response => {
            setImageSrc(response.data);
        })
        .catch(e => {
            console.error(e);
        });
      }

    useEffect(() => {
        },[])

    return (
        <div className="content">
            <div className="content_box">
                <div className="profile_img_wrap">
                    
                        <img className="profile_img"
                            src={imageSrc}
                            alt="프로필 이미지"
                        />
                </div>
                
                <input 
                    multiple type="file"
                    onChange={e => onUploadImage(e)}
                />
                <div class="btn_wrap">
                    <button className="outline_btn">취소</button>
                    <button className="solid_btn">등록</button>
                </div>

            </div>
        </div>
    );
};

export default UserSetting;