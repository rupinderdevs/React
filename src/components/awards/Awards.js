import React,{useRef} from 'react';
import 'antd/dist/antd.css';
import './style.scss';

import Texts from '../texts/Texts';
import {Row,Col, Card } from 'antd';
import { Carousel } from 'antd';
import leftarrow from '../../Assest/rightarrow.svg';
import rightarrow from '../../Assest/leftarrow.svg';

const { Meta } = Card;


const App = (props) => {
const breakPoints = [
  {width:550, slidesToShow:1},
  {width:768, slidesToShow:2},
  {width:1200, slidesToShow:4}

]


  const slide = useRef(null)

  const previous = () => {
    slide.current.prev()
   }

   const next = () => {
    slide.current.next()
   }


  return (

  <>
<div className='awards container'>

        <Row gutter={12} justify="space-between">
             <Col xs={24} sm={24} md={20} lg={14} > <Texts sub="AWARDS AND ACCOLADES" main="Experience our Precision, Quality, & Agility"/></Col>
            <Col xs={24} sm={24} md={4} lg={4}><div className='arrowicons'><img src={rightarrow} onClick={previous} alt={props.alt}/><img src={leftarrow} onClick={next} alt={props.alt}/></div></Col>
        </Row>
 

    <Carousel breakPoints={breakPoints} slidesToShow={4} ref={slide}>
      {props.awards.map ((item,index)=> (
      <div key={index} className="awardsbox">
        <Card cover ={ <img className='highimage' src ={item.src} alt={item.alt}/>} >
        <Meta description= {item.title} />
      </Card>
      </div> 
    ))
  }
</Carousel>
</div>

  </>
);}

export default App;