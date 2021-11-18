import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import styled from "styled-components";
import React,{useEffect,useState,useRef} from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';

//Component import here
import NavRound from  "./components/NavRound.js";
import MockCon from "./components/MockContent.js";
import ContentBox from "./components/Content.js";
import BottomContent from "./components/BottomContent";
function App() {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  //scroll
  const topRef = useRef(null);
  
  useEffect(()=>{
    AOS.init({
      duration : 3000,
      once: false,
      mirror:true,
      startEvent: 'load'
    });
    document.title = "Lion and the mouse";
    window.addEventListener('scroll', handleScroll);
    return() =>window.removeEventListener('scroll', handleScroll);
  },[]);
  return (
    <>
      <NavRound data-aos={"fade-down"} offY={offsetY} rT={topRef}/>
      <section className="Parallax" ref={topRef}>
          <span id="Title" style={{transform:`translateY(${offsetY*0.8}px)`}} data-aos={"zoom-in"}>ราชสีห์กับหนู</span>
          <div className="Parallax-lionrat" data-aos={"fade-up"} style={{transform:`translateY(${-offsetY*0.2}px)`}}></div>
          <div className="Parallax-background" style={{transform:`translateY(${offsetY*0.5}px)`}}></div>
          <div className="Parallax-mountain1" style={{transform:`translateY(${-offsetY*0.0001}px)`}}></div>
          <div className="Parallax-mountain2" ></div>
          <div className="Parallax-mountain3" style={{transform:`translateY(${150+(-offsetY*0.1)}px)`}}></div>
          <div className="Parallax-mountain4" style={{transform:`translate(15%,${(-offsetY*0.2)}px)`}}></div>
      </section>
      <section className="contentbox">
        <ContentBox id="con"/>
        <BottomContent id="bot"/>
      </section>
    </>
  );
}

export default App;
