import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
function App() {
  return (
    <>
      <Navbar variant="light" style={{ backgroundColor: "white", color: "black" }}>
        <Container fluid>
          <Navbar.Brand>
            <Nav.Link href="#" style={{ float: "right", color: "black" }}>
              <h6>Logo</h6>
            </Nav.Link>
          </Navbar.Brand>
          <Nav.Link href="#" style={{ float: "right", color: "black" }}>
            <h6>go to concluding</h6>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
