import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import Testimonialitem from './testimonial/Testimonialitem';
import { Row,Col } from 'antd';
import ratingstar from '../../Assest/ratingstar.png';


function Videotestimonial (props) {
  return (
      <>

<div className='videotestimonial container'>

    <Texts sub="Work We Are Proud Of" main="Video Testimonials"/>
     <div className='center'>
    <Row gutter={0} align="middle">
      <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={13}>
    <div className='test-video'>
         <iframe width={props.width} height={props.height} src={props.src} title={props.title} allowfullscreen/>
    </div>
    </Col>

    <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={11}>
    <div> 
    <Testimonialitem name="George Jack" src= {ratingstar} position="Co Founder" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd."/> 
    </div>

    </Col>

    </Row> 
    </div>
    </div>
 
    </>
  )
}

export default Videotestimonial