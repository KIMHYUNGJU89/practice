import { createContext, useState } from 'react';
import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './routes/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import axios from 'axios';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { inMainList } from './store.js';


export let Context1 = createContext();


function App() {
  let state = useSelector((state) => state);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);
  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h4>shoes shop</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
            <Nav.Link onClick={() => { navigate(-1) }}>이전페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>어바웃페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <div>
            <Main></Main>
          </div>
        } />
        {/* : 을 치고 뒤에 아무거나 치면 /detail/fdjsakl 페이지로 나눠짐. id는 다른곳에서 파라미터값으로 받기가능 */}
        <Route path="/detail/:id" element={
          <div>
            <Context1.Provider value = {{ 재고 }}>
              <Detail servant={state.mainData}></Detail>
            </Context1.Provider>
          </div>
        }>
        </Route>
        <Route path="/cart" element={
              <Cart></Cart>
        }/>
        {/* 어바웃페이지 */}
        <Route path="about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        {/* 이벤트페이지 */}
        <Route path="event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>


        <Route path="*" element={<div>잘못된 요청입니다.</div>} />
      </Routes>



    </div>
  );
}



function Main() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let dataCopy = [...state.mainData];
  let urls = ['https://codingapple1.github.io/shop/data2.json', 'https://codingapple1.github.io/shop/data3.json'];
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  return (

    <div>
      <div className='main-bg'>
      </div>
      <Container>
        <Row>
          {
            dataCopy.map(
              function (mainData, i) {
                let id = mainData.id + 1;
                return (
                  <>

                    <Col>
                      <Cols mainData={mainData} id={id}>
                      </Cols>
                    </Col>

                  </>
                )
              }
            )
          }
        </Row>
      </Container>
      {
        count < 2 ?
        <button onClick={() => {
          setLoading(true);
  
          if (count < 2) {
  
            axios.get(urls[count])
              .then((result) => {
                let copy = [];
                copy = copy.concat(...result.data);
                setCount(count + 1);
                setLoading(false);
                dispatch(inMainList(copy));
              })
            } else {
              alert('상품이 더 이상 없어요!');
            }
            console.log(state.mainData);
            
  
  
          // axios.post('/url',{name : kim}) 이런식으로 쓰면 서버에 데이터를 보냄
  
          // Promise.all([axios.get('/url1'),axios.get('/url2')]) 동시에 axios요청 여러개할때 쓰는데, 두개의 요청이 
          // 다 이루어지면 .then 코드실행
  
          // 서버는 문자만 주고받을 수 있다.
          // json데이터는 ""를 데이터에 넣는것으로 문자 취급 할수있기때문에 문자열이 아니라도 상관없다.
        }}>더보기</button>
        : null
      }
      {loading ? <Loading /> : null}
    </div>
  );

}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Event() {
  return (
    <div>
      <Link to="/event/one">첫번째이벤트</Link>
      <hr />
      <Link to="/event/two">두번째이벤트</Link>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Cols(props) {
  return (
    <div>
      <img src={"https://codingapple1.github.io/shop/shoes" + props.id + ".jpg"} width="400px" height="80%" border-radius="10px" />
      <h4>{props.mainData.title}</h4>
      <p>{props.mainData.price}</p>
      <Link to={'/detail/' + props.mainData.id}>상세정보</Link>
    </div>
  );
}


export default App;
