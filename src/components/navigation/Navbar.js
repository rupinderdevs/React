import { Link } from "react-router-dom";

import React, { useState } from "react";
import "antd/dist/antd.css";
import "../navigation/style.scss";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Layout, Menu, Row} from "antd";

// const { Link } = Anchor;

const { Header } = Layout;

const App = (props) => {
  // drawer is invisible by default
  const [isVisible, setIsVisible] = useState(false);

  // open the drawer
  const showDrawer = () => {
    setIsVisible(true);
  };

  // close
  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <>
    <Layout className="layout">

      <Header>
        <div className="logo">
          <a href="/"><img src={props.logo} alt="logo" /></a>
        </div>
    
        <div className="mobileHidden">
          <Menu
            className="menu"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Row>              
              {props.list.map((element, key) => (                
                 <Menu.Item key={key}><Link to="/"> {element.label} </Link></Menu.Item>               
                ))}        
            </Row>
          </Menu>
        </div>

        <div className="mobileVisible">
          <Button onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer visible={isVisible} onClose={closeDrawer} placement="right">
            <Menu
              items={props.list}/>
          </Drawer>
        </div>
 
      </Header>

    </Layout>
    </>
  );
};

export default App;
