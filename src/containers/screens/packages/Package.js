import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import Texts from '../texts/Texts';
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const App = (props) => (

  <>
    <div className='package container'>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={18} lg={12} xl={10}>
          <Texts sub="Work We Are Proud Of" main="We Are A Whole Package To Spark Growth, & Break Business Boundaries" />
        </Col>
      </Row>

      <Row gutter={24}>
        {props.packages.map((index, key) => (
          <Col xs={24} sm={24} md={24} lg={8}>

            <div key={key} className='packageimage'>
              <Row gutter={24} align={"middle"} justify={"space-between"}>
              <Col xs={8} sm={8} md={4} lg={4} xl={6}>
                  <img src={index.src} alt={index.alt} /> </Col>
                  <Col xs={16} sm={16} md={20} lg={17} xl={16}>
                  <h4>{index.title}</h4>
                  </Col>
              </Row>

              <p>{index.desc}</p>
              <div className='arrowforward'><RightOutlined /> </div>
            </div>

          </Col>
        ))}
      </Row>
      <div style={{ margin: "15px auto", display: "table" }}><PrimaryButton type="link" primaryBtn="Explore More" /></div>
    </div>
  </>

);

export default App;