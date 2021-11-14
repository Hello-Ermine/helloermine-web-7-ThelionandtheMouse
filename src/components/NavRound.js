import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
const NavBarRound = styled.div`
  position: fixed;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 80%;
  height:7%;
  margin: 0 auto;
  display: inline-block;
  list-style-type: none;
  align-items: center;
  transform:translateX(10%);
  z-index: 1000;
  font-family: 'Mitr', sans-serif;
  span{
      font-size: 24px;
  }
`;
const NavRound = () => {
  return (
    <>
      <NavBarRound>
        <Container fluid style={{width:"90%",marginTop:"5px"}}>
          <Navbar.Brand>
            <Nav.Link href="#" style={{ color: "white" ,display:"inline-block",backgroundColor:"green",borderRadius:"10px"}}>
              <span>โลโก้</span>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="#" style={{ float: "right", color: "white" ,backgroundColor:"green",borderRadius:"10px"}}>
            <span>สมาชิก</span>
          </Nav.Link>
        </Container>
      </NavBarRound>
    </>
  );
};
export default NavRound;
