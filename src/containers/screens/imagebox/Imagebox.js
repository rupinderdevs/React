import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import { List, Row, Col } from 'antd';
import DefaultButton from '../../../components/buttons/DefaultButton';
// import { ArrowRightOutlined } from '@ant-design/icons';
import circle from '../../../Assest/circle.svg';

const data = [
  {
    src: circle,
    title: 'Major Services',
  },
  {
    src: circle,
    title: 'Web Development Services',
  },
  {
    src: circle,
    title: 'Mobile Development Services',
  },
  {
    src: circle,
    title: 'Designing Services',
  },
  {
    src: circle,
    title: 'Digital Marketing Services',
  }
];

function Imagebox(props) {
  return (

    <div className='imagbox1 container'>
      <div className='center'>
      <Row gutter={12} align="middle" >

        <Col xs={24} sm={24} md={24} lg={12} xl={11} xxl={10}>
          <div className='imagebox'>
            <img src={props.imgbox} alt={props.alt} />
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={13} xxl={14}>
          <div className='textbox'>
            <Texts sub="Our Technical Expertise" main="Providing Innovative Services For World Changers" />

            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<img src={item.src} alt={props.alt} />}
                    title={<li>{item.title}</li>}
                  />
                </List.Item>
              )}
            />
            <DefaultButton defaultBtn="Explore More" />
          </div>
        </Col>
      </Row>
      </div>

    </div>

  )
}

export default Imagebox