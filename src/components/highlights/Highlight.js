import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Texts from '../texts/Texts';
import { Card,Row, Col } from 'antd';


const { Meta } = Card;

const App = (props) => (

  <>
  <div className='highlights container'>
        <Texts sub="Our Key Highlights" main="ELIS Record in Nutshell"/>

          <Row gutter={24} justify="start">   
              {props.highlight.map ((element, key) => (
                  <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Card bordered={false} key={key} cover={<img src = {element.src} alt={element.alt}/>} >
                          <Meta title={element.number} description={element.title} />
                      </Card>
                  </Col>
              ))}
          </Row>
  </div>
  </>

);

export default App;