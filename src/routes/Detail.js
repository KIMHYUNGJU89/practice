import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button
`
background : ${ props => props.bg};
color : ${ props => props.bg == 'blue' ? 'white' : 'black'} ;
padding : 10px;
`
let Box = styled.div
`
background : grey;
padding : 20px;
`
function Detail(props){
  let [visible,setVisible] = useState(true);
  let [count,setCount] = useState(0);
  let [userInput,inputSet] = useState(' ');
  // useEffect를 쓰면 lifecycle이 mount될때(실행될때),update(state의 값이 바뀔때) 실행되게 해주는 함수, 
  // spring 이랑 연동하면, 정보를 계속 db에서 불러오거나 보내는함수를 넣으면 좋을듯
  // useEffect 는 rendering이 다 끝난뒤에 실행됨.
  //시간이 오래걸리는 어려운 연산을 여기 적는다.
  // 타이머, 시간지나면 없어지는 데이터들을 여기 적는다.
  useEffect(()=>{
    let a = setTimeout(() => {
      setVisible(false);
    },2000)
    // return 안에 적은 함수는 useEffect 동작전에 실행됨.
    // unmount될때 한번 더 실행
    // {
      
    //   Number.isFinite(userInput) ? <div className="alert alert-warning"> 2초이내 구매시 할인 </div> : null

    // } 
    return () => {
      //기존 데이터요청을 취소해서 에러를 방지하기 위한 코드.
      clearTimeout(a);
    }
    ;
  }
, []  
)
useEffect(()=>{
  if (isNaN(userInput) == true){
    alert('그러지마세요')
  }
}, [userInput])
// useEffect(()=>{  }) 재 렌더링마다 코드를 실행하고싶으면,
// useEffect(()=>{},[]) mount시 한번만 코드실행하고싶으면
// useEffect(()=>{ return () => {}  },[]) unmount시 한번만 코드실행하고싶을때, useEffect전에 뭔가 코드실행하려면 return안에 코드작성.[]안에 state를 넣으면 그 state값이 변경될때만 useEffect실행
  let {id} = useParams();

  return(
    <div className="container">
        {
          visible == true ? <Compo1></Compo1> : null 
        }
        <div className="row">
          <div className="col-md-6">
            <img src={'/servant' + id +'.png'} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.servant[id].title}</h4>
            <p>{props.servant[id].content}</p>
            <button className="btn btn-danger">굿즈보러가기</button> 
            <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="green">버튼</YellowBtn>
          </div>
          <input onChange={(e) => 
            {inputSet(e.target.value); 
            } 
          }/>
        </div>
      </div> 
    );
  }


  function Compo1() {
    return(
      <div className="alert alert-warning">
      2초이내 구매시 할인
    </div>
    );
  }
  export default Detail;