import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import { Row, Col } from 'antd';
import DefaultButton from '../buttons/DefaultButton';
// import { ArrowRightOutlined } from '@ant-design/icons';
import java from '../../Assest/java.png';
import react from '../../Assest/react.png';
import python from '../../Assest/python.png';
import angular from '../../Assest/angular.png';
import solidity from '../../Assest/solidity.png';
import node from '../../Assest/node.png';
import Image from './Image';

const languagebox = [
  {
    src: java,
    title: 'Java',
  },
  {
    src: react,
    title: 'React JS',
  },
  {
    src: python,
    title: 'Python',
  },
  {
    src: node,
    title: 'Node',
  },
  {
    src: solidity,
    title: 'Solidity',
  },
  {
    src: angular,
    title: 'Angular',
  }
];


function Trade(props) {
  return (
    <>
      <div className='tradebox container'>
        <div className='center'>
          <Row gutter={12} align="middle">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div className='languages'>
                <Texts sub="OUR TOOLS OF TRADE" main="We Hold In-Depth Expertise In Future Proof Technologies" />
                <Image languagebox={languagebox} />
                <DefaultButton defaultBtn="Explore More"/>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={10}>
              <div className='imagebox'>
                <img src={props.imgbox} alt={props.alt} />
              </div>
            </Col>

          </Row>

        </div>


      </div>
    </>
  )
}

export default Trade