import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./stylecontent.scss";
import logo from "./img/logo.png";
const NavBarRound = styled.div`
  position: fixed;
  background-color: #FF8669;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 100%;
  height:8%;
  margin: 0 auto;
  display: inline-block;
  list-style-type: none;
  align-items: center;
  z-index: 1000;
  font-family: 'Mitr', sans-serif;
  /* transform: translateX(12%); */
  span{
      font-size: 24px;
  }
`;
const NavRound = () => {
  return (
    <>
      <NavBarRound>
        <Container fluid style={{width:"95%"}}>
          <Navbar.Brand className="linkho">
            <Nav.Link href="#" style={{ color: "white" ,display:"inline",backgroundColor:"",borderRadius:"10px"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
              <img src={logo} alt="logo" style={{width:"80px",height:"80px"}}/>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="#" style={{ float: "right", color: "white" ,backgroundColor:"",borderRadius:"10px",marginLeft:"10px",marginTop:"20px"}} onClick={()=>window.scrollTo(0,document.body.scrollHeight)} className="bt">
            <span>About us</span>
          </Nav.Link>
          <Nav.Link href="#" style={{ float: "right", color: "white" ,backgroundColor:"",borderRadius:"10px",marginTop:"20px"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="bt">
            <span>Home</span>
          </Nav.Link>
        </Container>
      </NavBarRound>
    </>
  );
};
export default NavRound;
