import React from 'react'
import './style.scss';
import { Row,Col } from 'antd';

function Testimonialitem(props) {
  return (
      <>

      <div className='testimonial'>
    <div className="test-item">
   <Row gutter={12}> 
   <Col sm={12} xs={24} md={12} lg={12} xl={10}>
   <h3>{props.name}</h3> </Col>
   <Col sm={12} xs={24} md={6} lg={5}>
   <img src={props.src} alt={props.alt}/></Col>
    </Row>
    <h5>{props.position}</h5>
    <p>{props.description}</p>
    </div>

    </div>
    </>
  )
}

export default Testimonialitem