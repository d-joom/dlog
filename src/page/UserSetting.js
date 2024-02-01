import React, {useEffect, useState, useRef, useCallback} from 'react';
import "../css/board.css";
import "../css/userSetting.css";
import {Editor} from '@toast-ui/react-editor';
import Profile from '../img/profile.png';
import { useLocation } from "react-router-dom";
import { get, put } from '../services/apiService';

const UserSetting = () => {

    const {state} = useLocation();

    const [form, setForm] = useState({
        picture : state.picture ? state.picture : Profile,
        name : state.name,
        description: state.description
    });

    const fetchModifyUser = async () => {
        try {
          await put(`/user/${state.uuid}`, form);
        } catch (error) {
          console.error('Error fetching users:', error);
          // 오류 처리
        }
    };

    const fetchUploadS3 = async () => {
        try {
          const result = await post(`/s3/upload`, formData);
          setForm({...form, picture : result});
          setMenu(category.list);
        } catch (error) {
          console.error('Error fetching users:', error);
          // 오류 처리
        }
    };

    const onSubmit = () => {
        
        fetchModifyUser().then(() => {
            alert("수정이 완료되었습니다.");
        });
        // axios
        //     .put(`/user/${state.uuid}`, null, {
        //         headers: {
        //           "token": localStorage.getItem('accessToken'),
        //           "Content-Type": "application/json",
        //             Accept: "application/json",
        //         },
        //         params: form
        //       })
        //     .then(response => {
        //         console.log(response);
        //         alert("수정이 완료되었습니다.");
        //     })
        //     .catch(e => {
        //         console.log("---------------");
        //         console.error(e);
        //     });

    }

    const onUploadImage = async (e, callback) => {

        const formData = new FormData();  // formData 생성
        formData.append('multipartFile', e.target.files[0]);  // 이미지 파일 값 할당

        await postImage(formData, callback);
        return false;
      };

    const postImage = (formData, callback) => {

        fetchUploadS3();

        // axios.post('/s3/upload', formData, {
        //     headers: {
        //      "content-type": "multipart/form-data",
        //       "token": localStorage.getItem('accessToken')
        //     }
        //   })
        // .then(response => {
        //     setForm({...form, picture : response.data});
        // })
        // .catch(e => {
        //     console.error(e);
        // });
      }

    const onChange = (e) => {
        const {value, name} = e.target;
        setForm({
            ...form,
            [name] : value
        });
    };

    const onSubmitHandler = (e) => {
        //버튼 리프레시 방지
        e.preventDefault();
        let body = {
            name: form.name,
            description: form.description,
            picture : form.picture
        }
        console.log(form);
        onSubmit();
        
    }

    useEffect(() => {
        },[state])

    return (
        <div className="content">
            <div className="content_box">
                <div className="profile_img_wrap">
                    <div className="profile_img">
                        <img src={form.picture}/>
                    </div>
                </div>
                <form onSubmit={onSubmitHandler} className="user_form">
                    <input 
                        multiple type="file"
                        onChange={e => onUploadImage(e)}
                    />
                    <div className="input_wrap">
                        <div className="name_input">
                            <div className="input_title">닉네임</div>
                            <input name="name" type="text" value={form.name} onChange={onChange}></input>
                        </div>
                        <div className="description_input">
                            <div className="input_title">설명</div>
                            <input name="description" type="text" value={form.description} onChange={onChange}></input>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <button className="outline_btn">취소</button>
                        <button type="submit" className="solid_btn">등록</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserSetting;