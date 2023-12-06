import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Navigation from './component/Navigation';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './page/Main';
import Post from './page/Post';
import List from './page/List';
import Layout from './component/Layout';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List/>}/>
        <Route path="/post" element={<Post/>}/>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
