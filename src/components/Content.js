import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import React,{useEffect,useState} from "react";
import AOS from 'aos';
import "./stylecontent.scss";
import tree from './img/tree.png';
import lion from "./img/lion.png";
import frame2 from "./img/frame2.png";
import frame3 from "./img/frame3.png";
import frame4 from "./img/frame4.png";
import frame5 from "./img/frame5.png";
import { Chapter1,Chapter2,Chapter3,Chapter4,Chapter5 } from "./MockContent";
const  Content = styled.div`
padding: 25%  15% 15% 5%;
background-color: white;
opacity: 1;
/* border: 5px solid rgba(255, 255, 255, .5);
box-shadow: 0 0 15px 15px white; */
position:relative;
z-index: 10;
p {
  font-size: 18px;
}
font-family: 'Mitr', sans-serif;
margin-left: 10%;
`;
const ContentBox = () => {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
    window.addEventListener('scroll', handleScroll);
    return() =>window.addEventListener('scroll', handleScroll);
  },[]);
  return(
      <>
        <div className="lionandmouse">
         {/* <div className="lionandmouse_bg"></div> */}
        <Chapter1 data-aos={"fade-up"}>
           <div className="bggg"></div>
        <br/> <br/> <br/> <br/> <br/> 
            <p>ราชสีห์ตัวหนึ่งเอนกายหลับใหลอยู่ในป่าทึบ <br/>หัวอันใหญ่โตของมันวางอยู่บนหัวอุ้งเท้า
                <br/>หนูน้อยขี้กลัวบังเอิญวิ่งมาบนตัวของมันโดยไม่ได้ตั้งใจ</p>
            <img src={lion} alt="lion"/>
        </Chapter1>
        <div className="Parallaxcontent__tree" style={{transform:`translateX(${offsetY*0.1}px)`}}><img src={tree} alt="tree"/></div>
        <div className="Parallaxcontent__tree2" style={{transform:`translateX(${-offsetY*0.1}px)`}}><img src={tree} alt="tree"/></div>
        {/* <div className="lionandmouse_bg"></div> */}
        <Chapter2 data-aos={"fade-up"} className="aos-item">
        <p>ด้วยความกลัวและร้อนรนที่จะรีบหนีไปให้พ้น <br/>เจ้าหนูกลับแล่นปรูดไปบนจมูกราชสีห์ <br/>ราชสีห์งีบหลับอยู่ดีๆ
                ครั้นถูกรบกวนมันจึงตะปบอุ้งเท้าอันใหญ่โต<br/>ลงไปบนเจ้าสัตว์ตัวน้อยด้วยความฉุนโกรธ
                <br/>หวังจะฆ่าหนูให้ตาย
            </p>
            <img src={frame2} alt="lion"/>
        </Chapter2>
        {/* <div className="lionandmouse_bg"></div> */}
        {/* <div className="Parallaxcontent__tree" style={{transform:`translateX(${offsetY<2352?offsetY:200}px)`}}><img src={tree} alt="tree"/></div>
        <div className="Parallaxcontent__tree2" style={{transform:`translateX(${-offsetY*0.2}px)`}}><img src={tree} alt="tree"/></div> */}
        <Chapter3 data-aos={"fade-left"} className="aos-item">
        <p>"ปล่อยข้าไปเถิด" เจ้าหนูผู้น่าสงสารขอร้อง <br/>"กรุณาปล่อยข้าไป
                แล้วสักวันหนึ่งข้าจะตอบแทนเจ้าอย่างแน่นอน"<br/>
                ราชสีห์รู้สึกขบขันยิ่งนักเมื่อคิดว่าเจ้าหนูจะมาช่วยอะไร<br/></p>
            <img src={frame3} alt="lion"/>
        </Chapter3>
        {/* <div className="lionandmouse_bg"></div> */}
        <Chapter4 data-aos={"fade-up"} data-aos-anchor-placement={"bottom-bottom"}className="aos-item">
        <p> อีกไม่กี่วันต่อมา ขณะกำลังซุ่มล่าเหยื่ออยู่ในป่า ราชสีห์ก็ติดบ่วงของนายพราน
                <br/>มันไม่อาจหลุดเป็นอิสระบ่วงของนายพรานได้จึงคำรามเสียงดัง
                ก้องป่าด้วยความโกรธแค้น <br/>เจ้าหนูจำเสียงนั้นได้จึงรีบวิ่งมาเจ้าป่ากำลังดิ้นรนอยู่ในตาข่าย
                <br/>มันรีบวิ่งตรงไปที่เชือกเส้นใหญ่เส้นหนึ่งซึ่งรัดราชสีห์เอาไว้ก่อนจะ
                กัดแทะเชือกจนขาด</p>
            <img src={frame4} alt="lion"/>
        </Chapter4> 
        {/* <div className="lionandmouse_bg"></div> */}
        <Chapter5 data-aos={"fade-up"} className="aos-item">
        <p> ในที่สุดราชสีห์ก็เป็นอิสระ<br/>
                "ท่านหัวเราะตอนที่ข้าบอกว่าจะตอบแทนท่าน" เจ้าหนูกล่าว <br/>"บัดนี้ท่านคงเห็นแล้วว่าแม้แต่หนูก็ช่วยราชสีห์ได้"
            </p>
            <img src={frame5} alt="lion"/>
        </Chapter5>
        </div>
      </>
  );
};
export default ContentBox;
