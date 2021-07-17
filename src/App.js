/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imgA from './images/프로필.png';
import imgZ from './images/navigation-button.gif';
import img1 from './images/navigation-button.gif';

function App() {

 let [제목, 이름변경] = useState(['비대면재활', '대면재활']); 
 let [좋아요, 좋아요변경] = useState(0); 
 let [좋아요2, 좋아요변경2] = useState(0); 

 //function 제목바꾸기() {
   //var newArray = [...스팟명];
   //newArray[0] = '추천'
   //이름변경( newArray );
 //}
 
//<button onClick={ 제목바꾸기 }>버튼</button>
//<span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>♡</span> {좋아요}
  //<span onClick={ ()=>{ 좋아요변경2(좋아요2 + 1) } }>♡</span> {좋아요2}

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
      <div className="lists">
        <h3>{ 제목[0] }</h3>
        </div>
        <div className="lists">
        <h3>{ 제목[1] } </h3>
        </div>
      </div>
    </div>
  );
  }

  function Modal(){
    return (
      <div className="modal">
        <div class="m">
        <div className="m1">
      <h3>안녕하세요 ○○○님</h3>
      <p>이번주 비대면 예약이 2건 있습니다.</p>
      </div>
      <div>
      <img src={imgA}width='60' height='60' alt='testA'/>
      </div>
      </div>
      <button onClick>예약내역</button> <button onClick>문의내역</button>
      </div>
    )
  }

export default App;
