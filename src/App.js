import { useState } from 'react';
import './App.css';
import { Button,Navbar,Container,Nav,Row,Col } from 'react-bootstrap';
import data from './routes/data.js';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js';


function App() {
  let navigate = useNavigate();
  let [servant,dataChange] = useState(data);
  let dataCopy = [...servant];
  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h4>서번트보드</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>캐릭터굿즈</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>이전페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>어바웃페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>이벤트페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
      <div>
       <Main></Main>
      </div>
          }/>
        <Route path="/detail/:id" element={
          <div>
          <Detail servant = {servant}></Detail>
          </div>
        }>
        </Route>
        {/* 어바웃페이지 */}
        <Route path="about" element={<About/>}>
        <Route path="member" element={<div>멤버임</div>}/>
        <Route path="location" element={<div>위치정보임</div>}/>
        </Route>

        {/* 이벤트페이지 */}
        <Route path="event" element={<Event/>}>
        <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
        <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>


        <Route path="*" element={<div>빠큐</div>}/>
      </Routes>
      <button onClick={()=>{
        console.log(dataCopy);
        dataChange(dataCopy);
      }}>가나다순으로 정렬</button>
    </div>
  );
}



function Main(){
  let [servant] = useState(data);
  let dataCopy = [...servant];
  useNavigate();
  return(

  <div>
  <div className='main-bg'>
  </div>
  <Container>
  <Row>
    {
      dataCopy.map(
      function(servant,i)
      {
        return(
        <Cols servant = {servant} i = {i}></Cols>
        
        )   
      }
    )
    }
  </Row>
  </Container>
  </div>
  );

}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Event(){
  return(
    <div>
      <Link to="/event/one">첫번째이벤트</Link>
      <hr/>
      <Link to="/event/two">두번째이벤트</Link>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Cols(props) {
  return(
    <Col className='col'>
    <img src={'/servant' + props.i+'.png'} width="80%" height="80%" border-radius ="10px"/>
    <h4>{props.servant.title}</h4>
    <p>{props.servant.content}</p>
    <Link to={'/detail/' + props.servant.id}>상세정보</Link>
    </Col>
  );
}


export default App;
