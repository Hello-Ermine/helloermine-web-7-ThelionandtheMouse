import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"> 
              TEST
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid></Container>
    </>
  );
}

export default App;
