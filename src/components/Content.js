import styled from "styled-components";
import { Row, Col} from "react-bootstrap";
import React,{useEffect,useState,useRef} from "react";
import AOS from 'aos';
import "./stylecontent.scss";
import tree from './img/object1.png';
import lion from "./img/1.png";
import frame2 from "./img/2.png";
import frame3 from "./img/3.png";
import frame4 from "./img/object7-05.png";
import frame5 from "./img/5.png";
import obj2 from "./img/object2.png";
import { Chapter1,Chapter2,Chapter3,Chapter4,Chapter5 } from "./MockContent";
const ContentBox = (props) => {
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
        <div className="content">
        <div className="content-bg"></div>
         {/* <div className="content-obj1"></div> */}
        <Chapter1 ref={props.refProp}>
        <br/> <br/> <br/> <br/> <br/> 
            <p>ราชสีห์ตัวหนึ่งเอนกายหลับใหลอยู่ในป่าทึบ <br/>หัวอันใหญ่โตของมันวางอยู่บนหัวอุ้งเท้า
                <br/>หนูน้อยขี้กลัวบังเอิญวิ่งมาบนตัวของมันโดยไม่ได้ตั้งใจ</p>
            <img src={lion} alt="lion" style={{width:"50%"}}  data-aos={"fade-up"}/>
        </Chapter1>
        <div className="Parallaxcontent__tree" style={{transform:`translateX(${offsetY*0.08}px)`}}><img src={tree} alt="tree"/></div>
        <div className="content-obj2"></div>
        <div className="content-obj3"></div>
        <Chapter2>
        <p>ด้วยความกลัวและร้อนรนที่จะรีบหนีไปให้พ้น <br/>เจ้าหนูกลับแล่นปรูดไปบนจมูกราชสีห์ <br/>ราชสีห์งีบหลับอยู่ดีๆ
                ครั้นถูกรบกวนมันจึงตะปบอุ้งเท้าอันใหญ่โต<br/>ลงไปบนเจ้าสัตว์ตัวน้อยด้วยความฉุนโกรธ
                <br/>หวังจะฆ่าหนูให้ตาย
            </p>
            <img src={frame2} alt="lion" style={{width:"45%"}} data-aos={"fade-up"}/>
        </Chapter2>
        <Chapter3 className="aos-item">
        <p>"ปล่อยข้าไปเถิด" เจ้าหนูผู้น่าสงสารขอร้อง <br/>"กรุณาปล่อยข้าไป
                แล้วสักวันหนึ่งข้าจะตอบแทนเจ้าอย่างแน่นอน"<br/>
                ราชสีห์รู้สึกขบขันยิ่งนักเมื่อคิดว่าเจ้าหนูจะมาช่วยอะไร<br/></p>
            <img src={frame3} alt="lion" style={{width:"45%"}} data-aos={"fade-up"}/>
        </Chapter3>
        <div className="content-obj4"></div>
        <div className="content-obj5"></div>
        <div className="content-obj6"></div>
        <div className="content-obj7"></div>
        <Chapter4>
          <Row>
          <div className="content-objnest" data-aos={"fade-up"} data-aos-anchor-placement={"top-bottom"}></div>
          <div className="content-rat" data-aos={"fade-right"}></div>
          <Col className="col-5"> <img src={frame4} alt="lion" style={{width:"75%"}} data-aos={"fade-up"} data-aos-anchor-placement={"top-bottom"}/></Col>
          <Col className="col-5"> <p> <br/><br/>อีกไม่กี่วันต่อมา ขณะกำลังซุ่มล่าเหยื่ออยู่ในป่า ราชสีห์ก็ติดบ่วงของนายพราน
                มันไม่อาจหลุดเป็นอิสระบ่วงของนายพรานได้จึงคำรามเสียงดัง
                ก้องป่าด้วยความโกรธแค้น เจ้าหนูจำเสียงนั้นได้จึงรีบวิ่งมาเจ้าป่ากำลังดิ้นรนอยู่ในตาข่าย
                หนูน้อยรีบวิ่งตรงไปที่เชือกเส้นใหญ่เส้นหนึ่งซึ่งรัดราชสีห์เอาไว้ก่อนจะ
                กัดแทะเชือกจนขาด</p></Col>
            <Col className="col-2"></Col>
          </Row>
        </Chapter4> 
        <Chapter5>
        <p> ในที่สุดราชสีห์ก็เป็นอิสระ<br/>เจ้าหนูจึงกล่าวกับราชสีห์ว่า<br/>
                "ท่านหัวเราะตอนที่ข้าบอกว่าจะตอบแทนท่าน <br/>บัดนี้ท่านคงเห็นแล้วว่าแม้แต่หนูก็ช่วยราชสีห์ได้"
            </p>
            <img src={frame3} alt="lion" style={{width:"45%"}} data-aos={"fade-up"}/>
        </Chapter5>
        <div className="content-obj8"></div>
        <div className="content-obj9"></div>
        <div className="content-obj10"></div>
        <div className="content-obj11"></div>
        <div className="content-obj12"></div>
        </div>
      </>
  );
};
export default ContentBox;
