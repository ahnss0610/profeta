/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import imgA from './images/프로필.png';
import imgZ from './images/back.png';
import img1 from './images/1.PNG';
import img2 from './images/2.PNG';
import img3 from './images/3.PNG';
import img4 from './images/4.PNG';
import img5 from './images/5.PNG';
import img6 from './images/6.PNG';
import img7 from './images/하단.PNG';

function App() {

 let [제목, 이름변경] = useState(['재활질문', '재활Tip', '재활일지' ]); 

return (
    <div className="App">
      <div className="Top-nav">
        <div className="menu">
        <img src={imgZ}width='30' height='30' alt='testA'/>
      </div>
        <div>큐디Talk</div>
        <div className="list">
        <div className="list1">
        <h5>{ 제목[0] }</h5>
        </div>
        <div className="list1">
        <h5>{ 제목[1] }</h5>
        </div>
        <div className="list1">
        <h5>{ 제목[2] }</h5>
        </div>
      </div>
      <div className="c">
      <p>게시판 변경</p>
      </div>
      <div className="cc">
      <p>최근 | 인기글</p>
      </div>
      <Modal/>
      </div>
    </div>
  );
  }

  function Modal(){
    return (
      <div className="modal">
        <div class="m">
      <p>평균 약을 언제까지 먹나요?</p>
      <h5>재활을 하면서 먹는 약이 있는데..</h5>
      <div>
      <img src={imgA}width='60' height='60' alt='testA'/>
      </div>
      </div>
      </div>
    )
  }

export default App;
