
import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Col, Row } from 'antd';
import Texts from '../texts/Texts';

import Box from './box/Box';


const App = (props) => (

  <>
    <div className='howwework container'>

      <Row gutter={4}>
        <Col xs={24} sm={24} md={24} lg={9}>
          <img className='workimg' src={props.src} alt={props.alt} />
        </Col>

        <Col xs={24} sm={24} md={24} lg={15}>
          <Texts sub="How We Work" main="Embracing Agile Development Until The Next Methodological Marvel Drops " />
        </Col>

      </Row>

      {props.howwework.map((element, key) => (
        <div key={key} className='workdetail'>
          <Box workicon={element.workicon} heading={element.heading} desc={element.desc} />
        </div>
      ))
      }

    </div>
  </>
);

export default App;



/* 
<div className='workbox'>
<div><img src={element.workicon}/> </div>
<div> <Para heading={element.heading} desc={element.desc}/> </div>
</div>   */