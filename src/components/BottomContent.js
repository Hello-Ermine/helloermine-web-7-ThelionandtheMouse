import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import avatar from './img/avatar.jpg';
import AOS from 'aos';
const  Lastsection = styled.div`
    font-family: 'Mitr', sans-serif;
    .team{
        margin-top: 10%;
    }
`;
const Content = styled.div`
padding: 0%  5% 6% 5%;
/* background-color: whitesmoke; */
opacity: 1;
/* border: 5px solid rgba(255, 255, 255, .5);
box-shadow: 0 0 15px 15px white; */
position:relative;
z-index: 10;
margin-bottom: 13%;
p {
  font-size: 18px;
}
font-family: 'Mitr', sans-serif;
h1{
    font-size: 72px;
}
h2{
    text-align: center;
    font-size: 72px;
}
.moral{
    text-align: center;
    span{
        font-size: 48px;
    }
    margin-bottom:3%;
}
`;

const roundedimg = {
width: "100%",
borderRadius: "50%",
};

const BottomCon = () =>{
    return (
        <Lastsection>
    <Content>
        <div className="moral" data-aos={"zoom-in"} data-aos-duration={"3000"}> 
          <h2>ข้อคิด</h2>
          <span>ความเมตตาไม่เคยสูญเปล่า</span>
        </div>
    </Content>
    <Container className="team" data-aos={"zoom-in"} data-aos-duration={"1000"}>
        <Col className='col-12 text-center'><h1>ผู้จัดทำ</h1></Col>
        <Row style={{marginTop:"2%"}}>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar} alt="avatar" style={roundedimg}/></Col>
        </Row>
        <Row className='text-center'>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
            <Col className='col-2'><p>ชื่อเล่น 001</p></Col>
        </Row>
    </Container>
    </Lastsection>
    );
};
export default BottomCon;