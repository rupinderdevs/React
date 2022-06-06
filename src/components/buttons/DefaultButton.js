import React from 'react';
import 'antd/dist/antd.css';
import '../buttons/style.scss';
import { Button } from 'antd';

const App = (props) => (
  <>

    <Button className='defaultbtn more-btn'>{props.defaultBtn}</Button>
        
  </>
);

export default App;