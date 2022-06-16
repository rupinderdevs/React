import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { BackTop,Col, Layout, Row } from 'antd';
import Socialicons from './Socialicons';
import facebook from './Asset/facebook.svg';
import instagram from './Asset/instagram.svg';
import twitter from './Asset/twitter.svg';
import behance from './Asset/behance.svg';
import linkedin from './Asset/linkedin.svg';
import up from './Asset/up.png';
import messagei from '../../Assest/messagei.svg';
import Quickmessage from '../quickmessage/Quickmessage';

const { Footer} = Layout;



const socialicons =[{socialmedia:facebook},{socialmedia:instagram},{socialmedia:twitter},{socialmedia:linkedin},{socialmedia:behance}]

const App = (props) => {

 

  return(

  <>
      <div className='footer'>
        
        {/* <div className='slidermessage'><img src={messagei} alt={"Message"} /></div>
         */}
        <Quickmessage messagei={messagei}/>
        
      <Layout>
        <Footer>
            
<Row>
    <Col xs={24} md={8} xl={9} >
        <img className='flogo' src={props.flogo} alt={props.alt}/>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum et.</p>
            <Socialicons socialicons={socialicons}/>
            
    </Col>
    <Col xs={24} sm={24} md={6} xl={5}>
        <h3>Quick Links</h3>
        <ul>
     <a href='/'>   <li>What we Do</li> </a>
     <a href='/'>   <li>Technologies</li> </a>
     <a href='/'>   <li>Industries</li> </a>
     <a href='/'>   <li>Portfolio</li> </a>
     <a href='/'>   <li>Life@ellocent</li> </a>
</ul>

    </Col>
    <Col xs={24} md={6} xl={5}>
       <h3>Useful Links</h3>
       <ul>
    <a href="/"> <li>Company</li> </a>
    <a href="/"> <li>Privacy Policy</li> </a>
    <a href="/"> <li>Terms & Conditions</li> </a>
    <a href="/"> <li>Blog</li> </a>
    <a href="/"> <li>Site Map</li> </a>

</ul>
    </Col>
    <Col xs={24} md={4} xl={5}>
        <h3>Contact Us</h3>
        <ul>
  <li>loremipsum@gmail.com </li>
  <li>0123 456 789</li> 
</ul>

    </Col>
    <BackTop>
<img className="upbtn" src={up} alt={props.alt}/> </BackTop>
</Row>


        </Footer>
      </Layout>
<div className='copyright container'>
      <Row justify={'space-between'}>
          <Col xs={24} sm={24} md={18} xl={18}>
        <p>Copyright © 2022 <a href="/">Ellocent Labs IT Solutions Pvt. Ltd.</a> all rights reserved</p>
          </Col>
          <Col xs={24} sm={24} md={6} xl={6}>

          <p><a href='/'>Privacy</a> | <a href='/'>Terms</a> | <a href='/'>Help</a>  </p>
          </Col>
      </Row>
      </div>
</div>
  </>
);}

export default App;