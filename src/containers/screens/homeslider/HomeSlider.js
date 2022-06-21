import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';

import { Carousel, Button,Row,Col } from 'antd';

const App = (props) => (
  <div className="deskslider">
    <Carousel swipeToSlide draggable autoplay={true} dots={true}>
      {props.sliderdata.map((item, index) => (
        <div key={index} className="contentstyle">
          {/* <img src={item.slider} alt={item.alt}/> */}
          <Row>
            <Col xs={24} sm={24} md={24} lg={14} xl={12} xxl={10}>
              <div className="content container">
                <h4>{item.subtitle}</h4>
                <h1>
                  {" "}
                  {item.title} <span>{item.title2}</span>{" "}
                </h1>
                <p> {item.description} </p>
                <div>
                  <Button className="more-btn">{item.button1}</Button>
                  <Button className="primarybtn">{item.button2}</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
  </div>
);

export default App;