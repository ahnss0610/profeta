/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imgA from './images/프로필.png';
import imgZ from './images/navigation-button.gif';
import img1 from './images/1.PNG';
import img2 from './images/2.PNG';
import img3 from './images/3.PNG';
import img4 from './images/4.PNG';
import img5 from './images/5.PNG';
import img6 from './images/6.PNG';

function App() {

 let [제목, 이름변경] = useState(['비대면재활', '대면재활', '식단관리',
 '재활질문', '상담내역', '결제정보']); 

return (
    <div className="App">
      <div className="Top-nav">
        <div className="menu">
        <img src={imgZ}width='20' height='20' alt='testA'/>
      </div>
        <div>큐디케어</div>
      </div>
      <Modal/>
      <div className="list">
      <div className="list1">
      <img src={img1}width='60' height='60' alt='testA'/>
        <h3>{ 제목[0] }</h3>
        </div>
        <div className="list1">
        <img src={img2}width='60' height='60' alt='testA'/>
        <h3>{ 제목[1] } </h3>
        </div>
        </div>
        <div className="lists">
        <div className="list2">
      <img src={img3}width='60' height='60' alt='testA'/>
        <h3>{ 제목[2] }</h3>
        </div>
        <div className="list2">
      <img src={img4}width='60' height='60' alt='testA'/>
        <h3>{ 제목[3] }</h3>
        </div>
        </div>
        <div className="listss">
        <div className="list3">
      <img src={img5}width='60' height='60' alt='testA'/>
        <h3>{ 제목[4] }</h3>
        </div>
        <div className="list3">
      <img src={img6}width='60' height='60' alt='testA'/>
        <h3>{ 제목[5] }</h3>
        </div>
      </div>
    </div>
  );
  }

  function Modal(){
    return (
      <div className="modal">
        <div class="m">
      <h3>안녕하세요 ○○○님</h3>
      <p>이번주 비대면 예약이 2건 있습니다.</p>
      <div>
      <img src={imgA}width='60' height='60' alt='testA'/>
      </div>
      </div>
      <button onClick>예약내역</button> <button onClick>문의내역</button>
      </div>
    )
  }

export default App;
