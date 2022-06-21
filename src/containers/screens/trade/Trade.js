import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import { Row, Col } from 'antd';
import DefaultButton from '../../../components/buttons/DefaultButton';
import Image from './Image';
import programminglanguage from "../../../Data/programminglanguage.json";

function Trade(props) {
  return (
    <>
      <div className="tradebox container">
        <div className="center">
          <Row gutter={12} align="middle">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div className="languages">
                <Texts
                  sub="OUR TOOLS OF TRADE"
                  main="We Hold In-Depth Expertise In Future Proof Technologies"
                />               
                <Image programminglanguage={programminglanguage} />
                <DefaultButton defaultBtn="Explore More" />
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={10}>
              <div className="imagebox">
                <img src={props.imgbox} alt={props.alt} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Trade