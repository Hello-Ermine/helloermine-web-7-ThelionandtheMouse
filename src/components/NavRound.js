import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./stylecontent.scss";
import logo from "./img/logo.png";
import App from "../App.js";
const NavBarRound = styled.div`
  position: fixed;
  background-color: rgba(255, 134, 105,0.5);
  /* border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px; */
  width: 100%;
  height:8%;
  margin: 0 auto;
  display: inline-block;
  list-style-type: none;
  align-items: center;
  z-index: 1000;
  font-family: 'Itim', cursive;
  /* transform: translateX(30%); */
  span{
      font-size: 24px;
  }
`;
const NavRound = (props) => {
  return (
    <>
      <NavBarRound>
        <Container fluid style={{width:"95%"}}>
          <Navbar.Brand>
            <Nav.Link href="/#" style={{ color: "white" ,display:"inline",backgroundColor:"",borderRadius:"10px"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
              <img src={logo} alt="logo" style={{width:"80px",height:"80px"}}/>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="/#" style={{ float: "right", color: "white" ,backgroundColor:`${props.offY > 6500 ? "#bf4b21":""}`,borderRadius:"10px",marginLeft:"10px",marginTop:"14px"}} onClick={()=>window.scrollTo(0,document.body.scrollHeight)} className="bt">
            <span>About us</span>
          </Nav.Link>
          <Nav.Link href="/#" style={{ float: "right", color: "white" ,backgroundColor:`${props.offY < 500 ? "#bf4b21":""}`,borderRadius:"10px",marginTop:"14px"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="bt">
            <span>Home</span>
          </Nav.Link>
        </Container>
      </NavBarRound>
    </>
  );
};
export default NavRound;
// `${props.offY > 1000 ? "#bf4b21":""}`
