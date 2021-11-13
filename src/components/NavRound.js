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
  z-index: 100;
  span{
      font-size: 24px;
  }
`;
const NavRound = () => {
  return (
    <>
      <NavBarRound>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link href="#" style={{ color: "black" ,display:"inline-block"}}>
              <span>Logo replace</span>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="#" style={{ float: "right", color: "black" }}>
            <span>To conclu</span>
          </Nav.Link>
        </Container>
      </NavBarRound>
    </>
  );
};
export default NavRound;
