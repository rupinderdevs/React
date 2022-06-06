import React from 'react'
import { Row, Col } from 'antd';

function Languages(props) {
  return (
    <>
      <Row>
        {props.languagebox.map((element, key) => (
          <Col xs={12} sm={8} lg={8} md={8}>

            <div key={key} className='langbox'>
              <img src={element.src} alt={element.alt} />
              <p>{element.title}</p>
            </div>
          </Col>
        )
        )}
      </Row>
    </>
  )
}

export default Languages