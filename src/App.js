/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imgA from './images/프로필.png';
import imgB from './images/arrow.PNG';
import imgC from './images/calender.PNG';
import imgZ from './images/back.png';

function App() {

 let [제목, 이름변경] = 
 useState(['이용자 상세정보', '문의내역', '처방전/진료비 영수증', '챗봇',
 '공지사항', '환경설정', '약관 보기', '버전 정보']
 );

return (
    <div className="App">
      <div className="Top-nav">
        <div className="menu">
        <img src={imgZ}width='20' height='20' alt='backspace'/>
      </div>
        <div className="title">재활 예약</div>
      </div>

      <Modal/>

      <div className="calender">
      <img src={imgB}width='500' height='80' alt='backspace'/>
      <img src={imgC}width='500' height='500' alt='backspace'/>
      </div>


      <div className="list">
      <h3><button onClick>예약하기</button></h3>
      </div>
      </div>
      );
    }

  function Modal(){
    return (
      <div className="modal">
        <div class="m">
        <div className="m1">
      <h3>이름:김사부</h3>
      <p>재활의학과 물리치료사</p>
      <p>진료일:월, 화, 수, 목, 금</p>
      <p>진료시간:09:00 ~ 17:00</p>
      </div>
      <div className="profile">
      <img src={imgA}width='60' height='60' alt='profile'/>
      </div>
      </div>
      </div>
    )
  }

export default App;