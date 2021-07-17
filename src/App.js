/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 let [제목, 이름변경] = useState(['상담신청', '진료예약']); 
 let [좋아요, 좋아요변경] = useState(0); 
 let [좋아요2, 좋아요변경2] = useState(0); 
 let posts = '목록';

 //function 제목바꾸기() {
   //var newArray = [...스팟명];
   //newArray[0] = '추천'
   //이름변경( newArray );
 //}
 
//<button onClick={ 제목바꾸기 }>버튼</button>
  
return (
    <div className="App">
      <div className="top-nav">
        <div>큐디케어</div>
      </div>
      <Modal/>
      <div className="list">
        <h3>{ 제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>♡</span> 
        {좋아요} </h3>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 제목[1] } <span onClick={ ()=>{ 좋아요변경2(좋아요2 + 1) } }>♡</span> 
        {좋아요2} </h3> 
        <hr/>
      </div>
    </div>
  );
  }

  function Modal(){
    return (
      <div className="modal">
      <h3>안녕하세요 ○○○님</h3>
      <p>이번주 진료 예약이 2건 있습니다.</p>
      <button onClick>예약확인</button> <button onClick>병원연동</button>
      </div>
    )
  }

export default App;