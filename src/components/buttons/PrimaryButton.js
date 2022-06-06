import React from 'react';
import 'antd/dist/antd.css';
import '../buttons/style.scss';
import { Button } from 'antd';

const App = (props) => (
  <>

    <Button className='primarybtn'>{props.primaryBtn}</Button>
    <Button className='primarybtn1'>{props.primaryBtn1}</Button>
        
  </>
);

export default App;