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

  let {id} = useParams();

  return(
    <div className="container">
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
        </div>
      </div> 
    );
  }

  export default Detail;