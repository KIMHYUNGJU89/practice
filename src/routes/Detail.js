import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from './../App.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { inCartList } from "./../store.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




let YellowBtn = styled.button
  `
background : ${props => props.bg};
color : ${props => props.bg == 'blue' ? 'white' : 'black'} ;
padding : 10px;
`
let Box = styled.div
  `
background : grey;
padding : 20px;
`
function Detail(props) {

  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { 재고, servant } = useContext(Context1);

  let [visible, setVisible] = useState(true);
  let [count, setCount] = useState(0);
  let [userInput, inputSet] = useState(' ');
  let [tap, setTap] = useState(0);
  // useEffect를 쓰면 lifecycle이 mount될때(실행될때),update(state의 값이 바뀔때) 실행되게 해주는 함수, 
  // spring 이랑 연동하면, 정보를 계속 db에서 불러오거나 보내는함수를 넣으면 좋을듯
  // useEffect 는 rendering이 다 끝난뒤에 실행됨.
  //시간이 오래걸리는 어려운 연산을 여기 적는다.
  // 타이머, 시간지나면 없어지는 데이터들을 여기 적는다.
  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000)
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
  useEffect(() => {
    if (isNaN(userInput) == true) {
      alert('그러지마세요')
    }
  }, [userInput])
  // useEffect(()=>{  }) 재 렌더링마다 코드를 실행하고싶으면,
  // useEffect(()=>{},[]) mount시 한번만 코드실행하고싶으면
  // useEffect(()=>{ return () => {}  },[]) unmount시 한번만 코드실행하고싶을때, useEffect전에 뭔가 코드실행하려면 return안에 코드작성.[]안에 state를 넣으면 그 state값이 변경될때만 useEffect실행
  let { id } = useParams();
  let i = parseInt(id) + 1;
  let [ac] = useState(props.servant[id].title);

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('watched')) || [];
    watched.push(props.servant[id].id);
    const newWatched = [...new Set(watched)]; // 중복 제거
    localStorage.setItem('watched', JSON.stringify(newWatched));
  }, [id]);
  return (
    <div className="container">

      {
        visible == true ? <Compo1></Compo1> : null
      }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + i + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.servant[id].title}</h4>
          <p>{props.servant[id].content}</p>
          <p>{props.servant[id].price}원</p>
          <button onClick={() => {
            dispatch(inCartList({ id: props.servant[id].id, name: props.servant[id].title, count: 1 }));
            navigate('/cart')
          }} className="btn btn-danger">주문하기</button>
          {/* <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="green">버튼</YellowBtn> */}
        </div>


        {/* <input onChange={(e) => 
            {inputSet(e.target.value); 
            } 
            }/> */}

        {/* defaultActiveKey는 페이지 처음들어갔을때 눌려있는버튼을 뜻함 */}
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTap(0);
            }} eventKey="link0">최근 본 상품들</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTap(1);
            }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {
              setTap(2);
            }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <TabContent ac={ac} tap={tap} />
    </div>
  );
}


function Compo1() {
  return (
    <div className="alert alert-warning">
      2초이내 구매시 할인
    </div>
  );
}

function TabContent({ tap, ac }) {
  let { 재고, servant } = useContext(Context1);
  let [fade, setFade] = useState('');
  //tap 이라는 state바뀔때마다 코드실행
  useEffect(() => {
    setTimeout(() => { setFade('end'); }, 100);
    return () => {
      setFade('');
    }
  }, [tap])
  // 이렇게 적으면 tap에 따라 배열로 만들어놓은 내용이 나옴 if문 굳이 하나하나 안 만들어도 됨
  return (
    // className에 문자열 바꾸기(변수 추가)
    // start end랑 공백이 없으면 하나의 문장이 되기때문에 빈 공간이 필요하다.
    <div className={'start ' + fade}>
      {
        [<RecentWatched/>, <div>내용1</div>, <div>내용2</div>][tap]
      }
    </div>
  );
}

function RecentWatched() {

  let JsonToObject = JSON.parse(localStorage.getItem('watched'));
  let [watched] = useState(JsonToObject);
  let copy = [...watched];
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <>
      <br></br>
      <Button variant="primary" onClick={handleShow}>
       상품 보기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>최근 본 상품들</h3>
        { 
        copy.map(function (a, i) {
          return (
            <>
              {
                i == 0 ? <br></br> : null
              }
              <h4 onClick={() => { navigate('/detail/' + i) }}>{a}번상품</h4>
              <hr></hr>
            </>
          )
        })
      }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
}
export default Detail;