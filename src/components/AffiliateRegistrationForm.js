import React from "react";
import { Form, Input, Row, Col, DatePicker, Select } from "antd";
import ButtonFilled from "../components/common/ButtonFilled";
import user from "../assets/images/affiliate-user.png";
import company from "../assets/images/affiliate-company.png";
import location from "../assets/images/affiliate-maps.png";
import date from "../assets/images/affiliate-calendar.png";
import website from "../assets/images/affiliate-website.png";
import email from "../assets/images/affiliate-mail.png";
import number from "../assets/images/affiliate-phone-call.png";
import dropdown from "../assets/images/order-dropdown-icon.png";
import countries from "../services/data/country.json";

const AffiliateRegistrationForm = () => {
  return (
    <div className="w-full font-semibold w-[100%] md:w-[90%] xl:w-[70%] mx-auto">
      <Form
        name="form"
        labelCol={{
          span: 24,
        }}
      >
        <Row>
          <Col span={23} md={{ span: 11 }}>
            <Form.Item
              label="Name"
              name="name"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="Enter name here"
                bordered={false}
                suffix={
                  <img src={user} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 11, offset: 2 }}>
            <Form.Item
              label="Company Name"
              name="companyname"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="Enter company name"
                bordered={false}
                suffix={
                  <img src={company} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={23} md={{ span: 11 }}>
            <Form.Item
              label="Company address"
              name="companyaddress"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="Enter here"
                bordered={false}
                suffix={
                  <img src={location} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 11, offset: 2 }}>
            <Form.Item
              label="Nationality"
              name="nationality"
              className="font-bold text-black"
            >
              <Select
                className="affiliate-registration"
                size="large"
                // className="info-input"
                bordered={false}
                style={{
                  fontSize: "14px",
                  color: "#757575",
                }}
                suffixIcon={
                  <img src={dropdown} alt="arrow" width="10px" height="8px" />
                }
                placeholder={<span className="font-semibold">USA</span>}
                defaultValue="USA"
                options={countries}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={23} md={{ span: 11 }}>
            <Form.Item
              label="Birth date"
              name="birthdate"
              className="font-bold text-black"
            >
              <DatePicker
                placeholder="2000-01-01"
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  fontWeight: "400",
                }}
                className="affiliate-registration"
                suffixIcon={
                  <img src={date} alt="arrow" width="14px" height="14px" />
                }
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 11, offset: 2 }}>
            <Form.Item
              label="Website URL"
              name="websiteurl"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="First name"
                bordered={false}
                suffix={
                  <img src={website} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={23} md={{ span: 11 }}>
            <Form.Item
              label="Email"
              name="email"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="Email"
                bordered={false}
                suffix={
                  <img src={email} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
          <Col span={23} md={{ span: 11, offset: 2 }}>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              className="font-bold text-black"
            >
              <Input
                className="affiliate-registration"
                size="large"
                placeholder="Phone Number"
                bordered={false}
                suffix={
                  <img src={number} alt="arrow" width="14px" height="14px" />
                }
                style={{ fontWeight: "400" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex flex-row items-center justify-center mt-4 gap-x-4">
          <ButtonFilled
            textSize="text-xs lg:text-sm"
            buttonText="send"
            paddingY="py-3"
            paddingX="px-12 md:px-14 lg:px-16"
            textColor="black"
          />
        </div>
      </Form>
    </div>
  );
};

export default AffiliateRegistrationForm;
