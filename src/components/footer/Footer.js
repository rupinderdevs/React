import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./style.scss";
import { BackTop, Col, Layout, Row } from "antd";
import Socialicons from "./Socialicons";
import up from "./Asset/up.png";
import messagei from "../../Assest/messagei.svg";
import Quickmessage from "../quickmessage/Quickmessage";
import socialicons from '../../Data/socialicons.json';

const { Footer } = Layout;

const App = (props) => {
  return (
    <>
      <div className="footer">
        <Quickmessage messagei={messagei} />

        <Layout>
          <Footer>
            <Row>
              <Col xs={24} md={8} xl={10}>
                <img className="flogo" src={props.flogo} alt={props.alt} />
                <p
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonum et.
                </p>
                <Socialicons socialicons={socialicons} />
              </Col>
              <Col xs={24} sm={24} md={6} xl={5}>
                <h3>Quick Links</h3>
                <ul>
                  <Link to="/whatwedo">
                    {" "}
                    <li>What we Do</li>{" "}
                  </Link>

                  <a href="/">
                    {" "}
                    <li>Technologies</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Industries</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Portfolio</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Life@ellocent</li>{" "}
                  </a>
                </ul>
              </Col>
              <Col xs={24} md={6} xl={5}>
                <h3>Useful Links</h3>
                <ul>
                  <a href="/">
                    {" "}
                    <li>Company</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Privacy Policy</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Terms & Conditions</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Blog</li>{" "}
                  </a>
                  <a href="/">
                    {" "}
                    <li>Site Map</li>{" "}
                  </a>
                </ul>
              </Col>
              <Col xs={24} md={4} xl={4}>
                <h3>Contact Us</h3>
                <ul>
                  <li>loremipsum@gmail.com </li>
                  <li>0123 456 789</li>
                </ul>
              </Col>
              <BackTop visibilityHeight={1200} duration={600}>
                <img className="upbtn" src={up} alt={props.alt} />{" "}
              </BackTop>
            </Row>
          </Footer>
        </Layout>
        <div className="copyright container">
          <Row justify={"space-between"}>
            <Col xs={24} sm={24} md={18} xl={18}>
              <p>
                Copyright © 2022{" "}
                <a href="/">Ellocent Labs IT Solutions Pvt. Ltd.</a> all rights
                reserved
              </p>
            </Col>
            <Col xs={24} sm={24} md={6} xl={6}>
              <p>
                <a href="/">Privacy</a> | <a href="/">Terms</a> |{" "}
                <a href="/">Help</a>{" "}
              </p>
            </Col>
          </Row>
          
        </div>
      </div>
    </>
  );
};

export default App;
