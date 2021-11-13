import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import NavRound from  "./components/NavRound.js";
import React,{useEffect,useState} from "react";
import AOS from 'aos';
//style component
function App() {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
  },[]);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <NavRound data-aos={"fade-down"}/>
      <section className="Parallax">
          <div className="Parallax__background"></div>
      </section>
    </>
  );
}

export default App;
