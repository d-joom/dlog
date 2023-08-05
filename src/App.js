import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결
import Navigation from './component/Navigation';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';

function App() {
  return (
    <div className="body"> 
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"></link>
      <Navigation />
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
