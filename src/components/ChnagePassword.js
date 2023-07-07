import React from "react";
import { Row, Col, Form, Input } from "antd";
import ButtonFilled from "../components/common/ButtonFilled";
import gorilla from "../assets/images/information-gorilla.png";

const ChnagePassword = () => {
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:justify-between w-full bg-white rounded-xl px-5 pt-8 pb-6 mt-2">
      <div className="w-full md:w-[35%] lg:w-[30%] xl:w-[30%]">
        <Form
          name="form"
          labelCol={{
            span: 24,
          }}
        >
          <Row className="">
            <Col span={24}>
              <Form.Item
                label="Current Password"
                name="currentpassword"
                className="font-bold text-black"
              >
                <Input size="large" className="info-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="New Password"
                name="newpassword"
                className="font-bold text-black"
              >
                <Input size="large" className="info-input" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Confirm Password"
                name="confirmpassword"
                className="font-bold text-black"
              >
                <Input size="large" className="info-input" />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex flex-row justify-center mt-7 mb-6">
            <ButtonFilled
              buttonText="change password"
              textSize="text-xs xl:text-base"
              paddingY="py-3"
              paddingX="px-6 xl:px-8"
            />
          </div>
        </Form>
      </div>
      <div className="w-full md:w-[60%] lg:w-[60%] xl:w-[48%] 2xl:w-[40%] relative min-h-[200px]">
        <div className="absolute left-0 top-0 md:top-10 lg:top-14 xl:top-0">
          <img
            src={gorilla}
            alt="gorilla"
            className="w-[100%] h-[260px] md:h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChnagePassword;
