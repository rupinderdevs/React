import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import Testimonialitem from './testimonial/Testimonialitem';
import Youtubevideo from './testimonial/Youtubevideo';
import { Row,Col,Carousel } from 'antd';
// import ratingstar from '../../Assest/ratingstar.png';


function Videotestimonial (props) {
  return (
    <>
      <div className="videotestimonial container">
        <Texts sub="Work We Are Proud Of" main="Video Testimonials" />
        <div className="center">
          <Carousel slidesToShow={1} dots={false} draggable swipeToSlide>
            {props.videotestimonials.map((index, key) => (
              <Row gutter={0} align="middle" key={key}>
                <Col xs={24} sm={24} md={24} lg={10} xl={12} xxl={13}>
                  <Youtubevideo src={index.src} />
                </Col>

                <Col xs={24} sm={24} md={24} lg={14} xl={12} xxl={11}>
                  {/* <div> */}

                 <Testimonialitem name={index.name}
                      star={index.star}
                      position={index.position}
                      description={index.description}
                    /> 
                  {/* </div> */}
                </Col>
              </Row>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Videotestimonial