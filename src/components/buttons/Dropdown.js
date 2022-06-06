import React from 'react';
import 'antd/dist/antd.css';
import R from '../navigation/Assest/R.png';
// import star from '../../Assest/star.svg';
import { CaretDownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space} from 'antd';

// import dropdown from '../../Data/dropdown.json';

const App = (props) => {

  const menu = (
    <Menu
    
      // items={dropdown} image path not loading
    
      items={[
        {
          label: 'Spanish',
          key: '1',
          icon: <img src={R} alt="spanish"/>,
        },
        {
          label: 'German',
          key: '2',
          icon: <img src={R} alt="German"/>,
        },
        {
          label: 'French',
          key: '3',
          icon:<img src={R} alt="French"/>,
        },
      ]}
    />
  );

  return(




    <Space wrap>
  
      <Dropdown overlay={menu}>
        <Button className='secondarybtn'>
          <Space>
            <img className='flagimg' src={props.icon} alt={props.alt} />Eng
            <CaretDownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  );
}

export default App;