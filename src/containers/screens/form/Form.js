import React from "react";
import { useFormik } from "formik";
import { Row, Col } from "antd";
import "./form.scss";
import "./style.scss";

import Texts from '../texts/Texts';
import PrimaryButton from "../../../components/buttons/PrimaryButton";


const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } 

  if (!values.contactnumber) {
    errors.contactnumber = "Required";
  } else if (values.contactnumber.length > 10) {
    errors.contactnumber = "Must be 10 Numbers";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      contactnumber: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="cform container">
        <Texts sub="Reach Us Out" main="Unstoppable Innovation Starts Here" />
        <form onSubmit={formik.handleSubmit}>
          <Row gutter={24}>
            <Col sm={24} md={12}>
              {/* <label htmlFor="firstName">First Name</label> */}
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </Col>
            <Col sm={24} md={12}>
              <input
                id="contactnumber"
                name="contactnumber"
                type="number"
                placeholder="Contact Number"
                onChange={formik.handleChange}
                value={formik.values.contactnumber}
              />
              {formik.errors.contactnumber ? (
                <div>{formik.errors.contactnumber}</div>
              ) : null}
            </Col>{" "}
          </Row>

          {/* <label htmlFor="email">Email Address</label> */}
          <Row gutter={24}>
            <Col sm={24} md={12}>
              <input
                id="email"
                placeholder="Email Address"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </Col>

            <Col sm={24} md={12}>
              <select
                id="select"
                name="select"
                type="select"
                onChange={formik.handleChange}
                value={formik.values.select}
              >
                {" "}
                <option value="">Select a job type</option>
                <option value="serviceone">Service One</option>
                <option value="servicetwo">Service Two</option>
              </select>

              {formik.errors.email ? <div>{formik.errors.select}</div> : null}
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <textarea
                id="textarea"
                placeholder="Message"
                name="textarea"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.textarea}
              />
              {formik.errors.textarea ? (
                <div>{formik.errors.textarea}</div>
              ) : null}
            </Col>
          </Row>
          <div style={{ margin: "0 auto", display: "table" }}>
            <PrimaryButton
              primaryBtn="Submit"
              type="primary"
              htmlType="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}
