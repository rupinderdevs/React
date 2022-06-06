import React from 'react'
import './style.scss';
import Texts from '../texts/Texts';
import { List } from 'antd';
import DefaultButton from '../buttons/DefaultButton';
// import { Icon } from '@ant-design/icons';
import circle from '../../Assest/circle.svg';

const data = [
    {src:circle, 
      title: 'Major Services',
    },
    {src:circle, 
      title: 'Web Development Services',
    },
    {src:circle, 
      title: 'Mobile Development Services',
    },
    {src:circle, 
      title: 'Designing Services',
    },
    {src:circle, 
        title: 'Digital Marketing Services',
      }
  ];


function Imagebox(props) {
  return (
      <div id='imagbox1'>
    
    <div className='imagebox'>
        <img src={props.imgbox}/>
    </div>

    <div className='textbox'>
    <Texts sub="OUR TECHNICAL EXPERTISE" main="Providing Innovative Services For World Changers"/>

    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<img src={item.src} />}
          title={<li>{item.title}</li>}
        
        />
      </List.Item>
    )}
  />

<DefaultButton defaultBtn="Explore More" /> 


    </div>

    </div>
  )
}

export default Imagebox