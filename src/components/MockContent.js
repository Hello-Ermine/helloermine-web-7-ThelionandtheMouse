import styled from "styled-components";
import "./stylecontent.scss";
import bg from './img/background.jpg';
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
    margin-top:20%;
`;
const  Chapter3 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    margin-top:20%;
`;
const  Chapter4 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    padding-top: 20%;
`;
const  Chapter5 = styled.div`
    height: 934px;
    text-align: center;
    font-size: 36px;
    font-family: 'Noto Sans Thai', sans-serif;
    z-index: 10;
    position: relative;
    margin-top:40%;
    margin-bottom: 15%;
    
`;
export {Chapter1,Chapter2,Chapter3,Chapter4,Chapter5};