import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import React,{useEffect,useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//Component import here
import NavRound from  "./components/NavRound.js";
import MockCon from "./components/MockContent.js";
function App() {
  useEffect(()=>{
    AOS.init({
      duration : 3000
    });
  },[]);
  return (
    <>
      <NavRound data-aos={"fade-down"}/>
      <section className="Parallax">
          <span id="Title">Lion And <br/>The Mouse</span>
          <div className="Parallax__background"></div>
      </section>
      <MockCon/>
    </>
  );
}

export default App;
