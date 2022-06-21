import React from 'react'
import './style.scss';
import { Row,Col } from 'antd';

function Testimonialitem(props) {
  return (
      <>

      <div className='testimonial'>
    <div className="test-item">
   <Row gutter={12} align={'middle'}> 
   <Col sm={12} xs={24} md={12} lg={12} xl={7}>
          <h3>{props.name}</h3>
        </Col>
   <Col sm={12} xs={24} md={6} lg={5} xl={17}>
          <img src={props.star} alt={props.alt} />
        </Col>
    </Row>
    <p>{props.position}</p>
    <p>{props.description}</p>
    </div>

    </div>
    </>
  )
}

export default Testimonialitem