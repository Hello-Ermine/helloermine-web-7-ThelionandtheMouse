import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import AOS from 'aos';
const MockCon = () => {
  const  Content = styled.div`
  Content::before{
    content: '';;
    position:absolute;
    bottom: 0px;
    width: 100%;
    margin-top: 50%;
    height: 150px;
    background: linear-gradient(to top,white,transparent);
    z-index: 1000;
  }
    padding: 5%;
    position: relative;
    margin-top: 17%;
    background-color: white;
    opacity: 0.98;
    border: 5px solid rgba(255, 255, 255, .5);
    box-shadow: 0 0 15px 15px white;
    p {
      font-size: 18px;
    }
  `;
  return(
      <>
        <Content>
            <p data-aos={"fade-down"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ante non libero facilisis fringilla. Quisque viverra accumsan mi sit amet pretium. Etiam eu venenatis mi, id auctor velit. Duis condimentum, nisi non dignissim finibus, sapien lacus laoreet erat, sit amet sollicitudin quam nulla non neque. Aenean faucibus libero vel est eleifend faucibus. Maecenas vitae nunc vel massa bibendum efficitur sed id libero. Curabitur bibendum non sem sit amet tincidunt. Donec metus mauris, sodales at lorem a, sollicitudin porttitor enim. Nam non tortor augue. Nam malesuada bibendum sollicitudin.

Proin sem nisi, consectetur nec fringilla sit amet, euismod non nunc. Praesent euismod ornare turpis. Etiam aliquet sem semper vestibulum aliquam. Cras hendrerit massa vitae lacus tempor, pellentesque facilisis leo consequat. Nam egestas malesuada magna id scelerisque. Aliquam eu auctor risus. Duis quis tortor a tortor cursus dignissim sit amet ac mauris. Suspendisse mollis lobortis gravida. Duis et semper odio.
            </p>
        </Content>
      </>
  );
};
export default MockCon;
