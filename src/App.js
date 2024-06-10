
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학'])
  let [따봉,따봉변경] = useState(0);
  let [modal,setModal] = useState(false);
  let modalCheck = true;
  [1,2,3].map(function(){
    console.log(1);
  })
  let copy = [...글제목];
  return (
    <div className="App">
      <div className="black-nav"> 
        <h4 style={ {color : 'white', fontSize : '16px'} }>reactBlog</h4>
      </div>
      <button onClick=
        {() => 
          { 
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy)
            }}>글제목변경
      </button>
      <button onClick=
        {() => 
          {
            let copy2 = [...글제목];
            copy2.sort();
            글제목변경(copy2)
            }}>
        가나다변경
        </button>
        {
         copy.map(function(a,i){
          return ( <div className='list'>
            <h4 onClick=
            {() => {{modal == false ? modalCheck = true : modalCheck = false;}setModal(modalCheck);}}>
            {글제목[i]}
            <span onClick={() => {따봉변경(따봉+1)}}>👍</span> 
            {따봉}
            </h4>
            <p>2월 17일 발행</p> 
          </div>)
        })
        }
        {
        modal == true ? <Modal></Modal> : null
        }
    </div>

  );
}

function Modal() {
  return(
    <>
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
    </>
  );
}


export default App;
