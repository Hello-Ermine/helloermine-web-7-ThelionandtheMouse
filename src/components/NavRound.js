import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./stylecontent.scss";
const NavBarRound = styled.div`
  position: fixed;
  background-color: #48590B;
  /* border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px; */
  width: 100%;
  height:7%;
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
        <Container fluid style={{width:"95%",marginTop:"5px"}}>
          <Navbar.Brand>
            <Nav.Link href="#" style={{ color: "white" ,display:"inline-block",backgroundColor:"",borderRadius:"10px"}}>
              <span>โลโก้</span>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="#" style={{ float: "right", color: "white" ,backgroundColor:"",borderRadius:"10px",marginLeft:"10px"}} onClick={()=>window.scrollTo(0,document.body.scrollHeight)} className="bt">
            <span>ผู้จัดทำ</span>
          </Nav.Link>
          <Nav.Link href="#" style={{ float: "right", color: "white" ,backgroundColor:"",borderRadius:"10px"}} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="bt">
            <span>Home</span>
          </Nav.Link>
        </Container>
      </NavBarRound>
    </>
  );
};
export default NavRound;
