import React,{useRef} from 'react';
import 'antd/dist/antd.css';
import './style.scss';

import Texts from '../texts/Texts';
import {Row,Col, Card } from 'antd';
import { Carousel } from 'antd';
import leftarrow from '../../../Assest/rightarrow.svg';
import rightarrow from '../../../Assest/leftarrow.svg';

const { Meta } = Card;


const App = (props) => {
/* const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
} */

  const slide = useRef(null)

  const previous = () => {
    slide.current.prev()
   }

   const next = () => {
     slide.current.next()
     console.log("next clicked");
   }


  return (
    <>
      <div className="awards container">
        <Row gutter={12} justify="space-between">
          <Col xs={24} sm={24} md={20} lg={12}>
            {" "}
            <Texts
              sub="Awards and Accolades"
              main="Experience our Precision, Quality, & Agility"
            />
          </Col>
          <Col xs={24} sm={24} md={4} lg={4}>
            <div className="arrowicons">
              <img src={rightarrow} onClick={previous} alt={props.alt} />
              <img src={leftarrow} onClick={next} alt={props.alt} />
            </div>
          </Col>
        </Row>
          <Carousel
          autoplay={true}
          centerMode={true}
            swipeToSlide
            draggable
            slidesToShow={3.2}
            ref={slide}
          >
            {props.awards.map((item, index) => (
              <div key={index} className="awardsbox">
                <Card
                  cover={
                    <img className="highimage" src={item.src} alt={item.alt} />
                  }
                >
                  <Meta description={item.title} />
                </Card>
              </div>
            ))}
          </Carousel>

      </div>
    </>
  );}

export default App;