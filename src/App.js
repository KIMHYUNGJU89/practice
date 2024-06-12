import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {
  let dates = nowDate();
  let[list,setList] = useState(['페이트 제로','페이트 스테이 나이트','페이트 엑스텔라']);
  let listCopy = [...list];
  let[good,setGood] = useState([]);
  let[date,setDate] = useState([]);
  let[title,setTitle] = useState(0);
  let[modal,setModal] = useState(false);
  let modalCheck = true ;
  let [userInput,inputSet] = useState('');
  let [updateInput,updateSet] = useState('');
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
    date.push(dates);
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
    <span onClick={(e) => {
      e.stopPropagation();
      let goodCopy = [...good];
      goodCopy[i] = goodCopy[i] + 1;
      setGood(goodCopy)
      }}>👍{good[i]}</span>
    </h4>
    <p>{date[i]}</p>
    <button onClick={() => {
      listCopy.splice(i,1);
      setList(listCopy);
    }}>글 삭제</button>
    <input onChange={(e) => 
      {updateSet(e.target.value); 
    }
    }/>
    <button onClick={() => {
      if(updateInput !== ''){
        listCopy[i] = updateInput;
      }
      setList(listCopy);
    }}>글 수정</button>
    </div>
    )
    })    
    }
    <input onChange={(e) => 
      {inputSet(e.target.value); 
        }
        }/>
    <button onClick={()=>{
      if(userInput !== ''){
        listCopy.unshift(userInput);
        }
        setList(listCopy);
        
        }}>글입력</button>
    {
      modal == true ? <Modal title = {title} list = {list} setList = {
        () => {
          listCopy[2] = '페이트 그랜드 오더';
          setList(listCopy);
          }
          } 
          color={'yellow'} /> : null 
    }
    <Modal2></Modal2>
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
function nowDate (){
  let dates = new Date();
  let months = dates.getMonth()+1;
  return dates.getFullYear() + " 년 " + months+ " 월 " + dates.getDate() + " 일 ";
}

class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
      <button onClick={() =>{
        this.setState({age : 21})
      }}>
        버튼
      </button>
      </div>
    )
  }
}
export default App; 
