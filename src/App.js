import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Navigation from './component/Navigation';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './page/Main';
import List from './page/List';
import Detail from './page/Detail';
import Write from './page/Write';
import UserSetting from './page/UserSetting';
import Layout from './component/Layout';
import Login from './page/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/:userId" element={<Main />} />
        <Route path="/:userId/list/:uuid" element={<List/>}/>
        <Route path="/:userId/detail/:uuid" element={<Detail/>}/>
        <Route path="/:userId/write" element={<Write/>}/>
        <Route path="/:userId/setting" element={<UserSetting/>}/>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
