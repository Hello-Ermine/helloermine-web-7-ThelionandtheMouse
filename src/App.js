import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import styled from "styled-components";
import React,{useEffect,useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//Component import here
import NavRound from  "./components/NavRound.js";
import MockCon from "./components/MockContent.js";
function App() {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
    window.addEventListener('scroll', handleScroll);
    return() =>window.addEventListener('scroll', handleScroll);
  },[]);
  return (
    <>
      <NavRound data-aos={"fade-down"}/>
      <section className="Parallax">
          <span id="Title" style={{transform:`translateY(${offsetY}px)`}}>ราชสีห์กับหนู</span>
          <div className="Parallax__lionrat" data-aos={"fade-up"}></div>
          <div className="Parallax__background"></div>
          <div className="Parallax__bigcircle"></div>
      </section>
      <section className="contentbox">
        <MockCon/>
      </section>
    </>
  );
}

export default App;
