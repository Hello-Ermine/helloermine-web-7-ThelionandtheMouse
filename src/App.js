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
import ContentBox from "./components/Content.js";
function App() {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  console.log(offsetY);
  useEffect(()=>{
    AOS.init({
      duration : 3000,
      once: false,
      mirror:true,
      startEvent: 'load'
    });
    window.addEventListener('scroll', handleScroll);
    return() =>window.addEventListener('scroll', handleScroll);
  },[]);
  return (
    <>
      <NavRound data-aos={"fade-down"}/>
      <section className="Parallax">
          <span id="Title" style={{transform:`translateY(${offsetY*0.85}px)`}} data-aos={"zoom-in"}>ราชสีห์กับหนู</span>
          <div className="Parallax__lionrat" data-aos={"fade-up"} style={{transform:`translateY(${-offsetY*0.2}px)`}}></div>
          <div className="Parallax__background" style={{transform:`translateY(${offsetY*0.5}px)`}}></div>
          <div className="Parallax__bigcircle" style={{transform:`translateY(${-offsetY*0.3}px)`}}></div>
      </section>
      <section className="contentbox">
        <ContentBox/>
      </section>
    </>
  );
}

export default App;
