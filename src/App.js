/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imgA from './images/프로필.png';
import imgB from './images/btmnav.png';
import imgZ from './images/back.png';

function App() {

 let [제목, 이름변경] = 
 useState(['이용자 상세정보', '문의내역', '처방전/진료비 영수증', '챗봇',
 '공지사항', '환경설정', '약관 보기', '버전 정보']);

return (
    <div className="App">
      <div className="Top-nav">
        <div className="menu">
        <img src={imgZ}width='20' height='20' alt='backspace'/>
      </div>
        <div className="title">마이페이지</div>
      </div>
      <Modal/>
      <div className="list">
      <div className="list1">
        <h3>{ 제목[0] }</h3>
        <h3>{ 제목[1] }</h3>
        <h3>{ 제목[2] } </h3>
        <h3>{ 제목[3] } </h3>
      </div>
      <div className="list1">
        <h3>{ 제목[4] }</h3>
        <h3>{ 제목[5] }</h3>
        <h3>{ 제목[6] } </h3>
        <h3>{ 제목[7] } </h3>
      </div>
      </div>
        <img src={imgB}width='500' height='100' alt='btm-nav'/>
      </div>
      );
    }

  function Modal(){
    return (
      <div className="modal">
        <div class="m">
        <div className="m1">
      <h3>김서원님 <button onClick>수정</button></h3>
      <p>ksn2021@naver.com</p>
      <p>담당전문가:이재민 </p>
      </div>
      <div className="profile">
      <img src={imgA}width='60' height='60' alt='profile'/>
      </div>
      </div>
      </div>
    )
  }

export default App;