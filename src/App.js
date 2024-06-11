import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let[list,setList] = useState(['페이트 제로','페이트 스테이 나이트','페이트 엑스텔라']);
  let listCopy = [...list];
  let[good,setGood] = useState([]);
  let[title,setTitle] = useState(0);
  let[modal,setModal] = useState(false);
  let modalCheck = true ;


  return (
    <div className="App">
    <button onClick={() => {
      listCopy[2] = '페이트 그랜드 오더';
      setList(listCopy);
    }}>글제목수정</button>
    <button onClick={() => {
      listCopy.sort();
      setList(listCopy);
    }}>가나다순변경</button>
    {
     listCopy.map(
    function(titleName,i)
    {
    good.push(0);
    return(
    <div className='list'>
    <h4 onClick={
      () => {
        {
          modal == false ? modalCheck = true : modalCheck = false;
        }
        setTitle(i);
        setModal(modalCheck);
      }
    }>
    {titleName}
    <span onClick={() => {
      let goodCopy = [...good];
      goodCopy[i] = goodCopy[i] + 1;
      setGood(goodCopy)
      }}>👍</span>{good[i]}
    </h4>

    <p>2024-06-11 발행</p>
    </div>
    )
    })    
    }
    <input></input>
    {
      modal == true ? <Modal title = {title} list = {list} setList = {
        () => {
        listCopy[2] = '페이트 그랜드 오더';
        setList(listCopy);
       }
    } 
    color={'yellow'} ></Modal> : null
    }
    </div>

  );
}

function Modal(props) {
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.list[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.setList}>글수정</button>
    </div>
  );
}


export default App;
