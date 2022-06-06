import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { PhoneOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import {Form, Input,Row,Col, Select} from 'antd';
import PrimaryButton from '../buttons/PrimaryButton';
import Texts from '../texts/Texts';

const { Option } = Select;

const App = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (

    <div className="cform container">
    <Texts sub="Reach Us Out" main="Unstoppable Innovation Starts Here"/>

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Row gutter={14}>
          <Col span={12}>
        <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name  " />
      </Form.Item></Col>

        <Col span={12}>
        <Form.Item
        name="contact"
        rules={[
          {
            required: true,
            message: 'Please input your Contact Number',
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined  className="site-form-item-icon" />}
          type="number"
          placeholder="Contact Number"
        />
      </Form.Item></Col>

              
      </Row> 

      <Row gutter={14}>
        <Col span={12}> 
        <Form.Item
        name={['user', 'email']}       
        rules={[
          {
            type: 'email',
          },
        ]}
      >
       <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email  " />
      </Form.Item></Col>

        <Col span={12}> 
        <Form.Item
        name="select"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Services',
          },
        ]}
      >
        <Select placeholder="Services" prefix={<PhoneOutlined  className="site-form-item-icon" />}>
          <Option value="service1">Service 1</Option>
          <Option value="service2">Service 2</Option>
        </Select>

      </Form.Item>
      </Col>        
      </Row> 

<Row>
  <Col span={24}>
  <Form.Item
        name="note"
        rules={[
          {
            required: true,
            message: 'Please input Note',
          },
        ]}
      >
        <Input.TextArea placeholder="Note" />
      </Form.Item>
  </Col>
</Row>

      <Form.Item>
      <div style={{margin:"0 auto",display: "table"}}><PrimaryButton primaryBtn="Submit" type="primary" htmlType="submit"/></div>

      </Form.Item>
    </Form>
    </div>
  );
};

export default App;