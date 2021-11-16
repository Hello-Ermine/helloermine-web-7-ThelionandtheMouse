import styled from "styled-components";
import "./stylecontent.scss";
import bg from './img/background.jpg';
import obj3 from './img/object3.png';
const  Chapter1 = styled.div`
    margin-top: 29.5%;
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 5;
    position: relative;
    width: 100%;
    /* .bggg{
        background-image: url(${bg});
        background-repeat: repeat-y;
        background-size: cover;
        height:100%;
        width: 100%;
        z-index: -30;
        position: absolute;
    } */
`;
const  Chapter2 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    margin-bottom: 80px;
    z-index: 10;
    position: relative;
    margin-top:25%;
    background-color:rgba(255,255,255,0);
`;
const  Chapter3 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    margin-top:20%;
    background-color:rgba(255,255,255,0);
`;
const  Chapter4 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    padding-top: 1%;
    background-color:rgba(255,255,255,0);
`;
const  Chapter5 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    margin-top:5%;
    background-color:rgba(255,255,255,0);
    
`;
export {Chapter1,Chapter2,Chapter3,Chapter4,Chapter5};