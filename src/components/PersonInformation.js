import React from "react";
import { Row, Col, Form, Input, Select } from "antd";
import ButtonFilled from "./common/ButtonFilled";
import dropdown from "../assets/images/order-dropdown-icon.png";

const PersonInformation = () => {
  return (
    <div>
      <Form
        name="form"
        labelCol={{
          span: 24,
        }}
      >
        <Row>
          <Col span={23} md={{ span: 7 }}>
            <Form.Item
              label="Title"
              name="title"
              className="font-bold text-black"
            >
              <Select
                size="large"
                className="info-input"
                bordered={false}
                style={{
                  fontSize: "12px",
                  color: "#757575",
                }}
                suffixIcon={
                  <img src={dropdown} alt="arrow" width="10px" height="8px" />
                }
                placeholder={
                  <span className="font-semibold text-lighter-gray2">Mr.</span>
                }
                // defaultValue="Mr."
                options={[
                  {
                    value: "mr",
                    label: "Mr",
                  },
                  {
                    value: "miss",
                    label: "Miss",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="First Name"
              name="firstname"
              className="font-bold text-black"
            >
              <Input
                size="large"
                className="info-input"
                placeholder="Parveen"
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="Last Name"
              name="lastname"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" placeholder="Sharma" />
            </Form.Item>
          </Col>
        </Row>
        <Row className="">
          <Col span={23} md={{ span: 7 }}>
            <Form.Item
              label="Country"
              name="country"
              className="font-bold text-black"
            >
              <Select
                size="large"
                className="info-input"
                bordered={false}
                style={{
                  fontSize: "12px",
                  color: "#bfbfbf",
                }}
                suffixIcon={
                  <img src={dropdown} alt="arrow" width="10px" height="8px" />
                }
                placeholder={
                  <span className="font-semibold text-lighter-gray2">
                    India
                  </span>
                }
                // defaultValue="Mr."
                options={[
                  {
                    value: "india",
                    label: "India",
                  },
                  {
                    value: "usa",
                    label: "USA",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="Postal Code"
              name="postalcode"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="City"
              name="city"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" />
            </Form.Item>
          </Col>
        </Row>
        <Row className="">
          <Col span={23} md={{ span: 7 }}>
            <Form.Item
              label="Address"
              name="address"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 7, offset: 1 }}>
            <Form.Item
              label="Email"
              name="email"
              className="font-bold text-black"
            >
              <Input size="large" className="info-input" />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex flex-row justify-center mt-4">
          <ButtonFilled
            buttonText="save changes"
            textSize="text-xs xl:text-base"
            paddingY="py-3"
            paddingX="px-6 xl:px-10"
          />
        </div>
      </Form>
    </div>
  );
};

export default PersonInformation;
