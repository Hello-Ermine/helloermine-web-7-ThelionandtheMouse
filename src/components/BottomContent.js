import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import avatar from './img/avatar.jpg';

const  Content = styled.div`
padding: 15%  5% 5% 10%;
background-color: whitesmoke;
opacity: 1;
/* border: 5px solid rgba(255, 255, 255, .5);
box-shadow: 0 0 15px 15px white; */
position:relative;
z-index: 10;
p {
  font-size: 18px;
}
`;

const roundedimg = {
width: "100%",
borderRadius: "50%",
};


const BottomCon = () =>{
    return (
    <Content>
    <Container>
        <Col className='col-12 text-center'><h1>ผู้จัดทำ</h1></Col>
        <Row>
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
    </Content>
    );
};
export default BottomCon;