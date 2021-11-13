import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import React,{useEffect,useState} from "react";
import AOS from 'aos';
import "./stylecontent.scss";
import tree from './img/tree.png';
const  Content = styled.div`
padding: 15%  5% 5% 10%;
background-color: white;
opacity: 1;
/* border: 5px solid rgba(255, 255, 255, .5);
box-shadow: 0 0 15px 15px white; */
position:relative;
z-index: 10;
p {
  font-size: 18px;
}
`;
const MockCon = () => {
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
        <Content>
            <p data-aos={"fade-up"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ante non libero facilisis fringilla. Quisque viverra accumsan mi sit amet pretium. Etiam eu venenatis mi, id auctor velit. Duis condimentum, nisi non dignissim finibus, sapien lacus laoreet erat, sit amet sollicitudin quam nulla non neque. Aenean faucibus libero vel est eleifend faucibus. Maecenas vitae nunc vel massa bibendum efficitur sed id libero. Curabitur bibendum non sem sit amet tincidunt. Donec metus mauris, sodales at lorem a, sollicitudin porttitor enim. Nam non tortor augue. Nam malesuada bibendum sollicitudin.

Proin sem nisi, consectetur nec fringilla sit amet, euismod non nunc. Praesent euismod ornare turpis. Etiam aliquet sem semper vestibulum aliquam. Cras hendrerit massa vitae lacus tempor, pellentesque facilisis leo consequat. Nam egestas malesuada magna id scelerisque. Aliquam eu auctor risus. Duis quis tortor a tortor cursus dignissim sit amet ac mauris. Suspendisse mollis lobortis gravida. Duis et semper odio.
            </p>
        </Content>
        <div className="Parallaxcontent__tree" style={{transform:`translateX(${offsetY*0.2}px)`}}><img src={tree} alt="tree"/></div>
        <div className="Parallaxcontent__tree2" style={{transform:`translateX(${-offsetY*0.2}px)`}}><img src={tree} alt="tree"/></div>
        <br/><br/><br/><br/><br/>
        <Content style={{paddingTop:"30%"}}>
            <p data-aos={"fade-left"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ante non libero facilisis fringilla. Quisque viverra accumsan mi sit amet pretium. Etiam eu venenatis mi, id auctor velit. Duis condimentum, nisi non dignissim finibus, sapien lacus laoreet erat, sit amet sollicitudin quam nulla non neque. Aenean faucibus libero vel est eleifend faucibus. Maecenas vitae nunc vel massa bibendum efficitur sed id libero. Curabitur bibendum non sem sit amet tincidunt. Donec metus mauris, sodales at lorem a, sollicitudin porttitor enim. Nam non tortor augue. Nam malesuada bibendum sollicitudin.

Proin sem nisi, consectetur nec fringilla sit amet, euismod non nunc. Praesent euismod ornare turpis. Etiam aliquet sem semper vestibulum aliquam. Cras hendrerit massa vitae lacus tempor, pellentesque facilisis leo consequat. Nam egestas malesuada magna id scelerisque. Aliquam eu auctor risus. Duis quis tortor a tortor cursus dignissim sit amet ac mauris. Suspendisse mollis lobortis gravida. Duis et semper odio.
            </p>
        </Content>
        <Content>
            <p data-aos={"fade-right"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ante non libero facilisis fringilla. Quisque viverra accumsan mi sit amet pretium. Etiam eu venenatis mi, id auctor velit. Duis condimentum, nisi non dignissim finibus, sapien lacus laoreet erat, sit amet sollicitudin quam nulla non neque. Aenean faucibus libero vel est eleifend faucibus. Maecenas vitae nunc vel massa bibendum efficitur sed id libero. Curabitur bibendum non sem sit amet tincidunt. Donec metus mauris, sodales at lorem a, sollicitudin porttitor enim. Nam non tortor augue. Nam malesuada bibendum sollicitudin.

Proin sem nisi, consectetur nec fringilla sit amet, euismod non nunc. Praesent euismod ornare turpis. Etiam aliquet sem semper vestibulum aliquam. Cras hendrerit massa vitae lacus tempor, pellentesque facilisis leo consequat. Nam egestas malesuada magna id scelerisque. Aliquam eu auctor risus. Duis quis tortor a tortor cursus dignissim sit amet ac mauris. Suspendisse mollis lobortis gravida. Duis et semper odio.
            </p>
        </Content>
      </>
  );
};
export default MockCon;
