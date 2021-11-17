import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import avatar1 from './img/members/1.png';
import avatar2 from './img/members/2.png';
import avatar3 from './img/members/3.png';
import avatar4 from './img/members/4.png';
import avatar5 from './img/members/5.png';
import avatar6 from './img/members/6.png';
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
};

const roundedsquare1 = {
width: "200px",
fontSize: "20px",
borderRadius: "20px",
};

const roundedsquare2 = {
width: "200px",
borderRadius: "20px",
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
            <Col className='col-2'><img src={avatar1} alt="Sand" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar2} alt="Bam" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar3} alt="Peem" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar4} alt="Pui" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar5} alt="Dean" style={roundedimg}/></Col>
            <Col className='col-2'><img src={avatar6} alt="Jee" style={roundedimg}/></Col>
        </Row>
        <Row className='text-center' style={{marginTop:"3em"}}>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>แซนด์</a></Col>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>แบม</a></Col>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>ภีม</a></Col>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>ปุ้ย</a></Col>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>ดีน</a></Col>
            <Col className='col-2'><a className='btn btn-outline-light active' style={roundedsquare1}>จี้</a></Col>
        </Row>
        <Row className='text-center' style={{marginTop:".5em"}}>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>WEB DESIGN</a></Col>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>WEB DESIGN</a></Col>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>FRONT-END</a></Col>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>FRONT-END</a></Col>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>FRONT-END</a></Col>
            <Col className='col-2'><a className='btn btn-outline-dark' style={roundedsquare2}>INFRASTRUCTURE</a></Col>
        </Row>
    </Container>
    </Lastsection>
    );
};
export default BottomCon;