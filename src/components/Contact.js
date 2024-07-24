import { Row, Col, Form, Input, Button, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const getEncodedUrlStr = (payload) => {
  const params = new URLSearchParams();
  Object.keys(payload).forEach((key) => {
    params.append([key], payload[key]);
  });

  return params;
};

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    const payload = {
      "form-name": "test",
      name,
      email,
      message: msg,
    };

    const getEncodedUrlstr = getEncodedUrlStr(payload);

    try {
      const res = await axios.post("/", getEncodedUrlstr, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (res?.status === 200) {
        message.success("Message sent successfully");
        navigate("/");
      }
    } catch (error) {
      message.error("There was an error sending your message");
    }
  };

  return (
    <div className="flex text-white h-full py-20">
      <Row gutter={[0, 20]}>
        <Col md={4} sm={22} xs={24}></Col>
        <Col md={16} sm={24} xs={24}>
          <Row>
            <Col md={24} sm={24} xs={24}>
              <h1 className="text-center font-bold text-3xl">
                Contact <span className="text-yellow-500 text-3xl">Me</span>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={24} sm={24} xs={24}>
              <p className="text-center text-gray-400 text-lg mt-5">
                Feel free to reach out to discuss potential collaborations,
                project ideas, or any queries you may have. I'm always excited
                to connect and explore new opportunities in front-end
                development.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={4} sm={22} xs={24}></Col>
        <Col md={24} sm={24} xs={24}>
          <Row>
            <Col md={3} sm={22} xs={24}></Col>
            <Col md={7} sm={22} xs={24}>
              <Row gutter={[0, 16]} className="p-5">
                <Col
                  md={5}
                  sm={22}
                  xs={24}
                  className="text-lg text-yellow-500 font-bold">
                  Address :
                </Col>
                <Col md={19} sm={24} xs={24} className="text-lg">
                  Abshcc shshsh ,Doddanakundi, Banglore
                </Col>
                <Col
                  md={5}
                  sm={22}
                  xs={24}
                  className="text-lg text-yellow-500 font-bold">
                  Phone :
                </Col>
                <Col md={19} sm={24} xs={24} className="text-lg">
                  9876543210
                </Col>
                <Col
                  md={5}
                  sm={22}
                  xs={24}
                  className="text-lg text-yellow-500 font-bold">
                  Email :
                </Col>
                <Col md={19} sm={24} xs={24} className="text-lg">
                  xyz@gmail.com
                </Col>
                <Col
                  md={5}
                  sm={22}
                  xs={24}
                  className="text-lg text-yellow-500 font-bold">
                  Website :
                </Col>
                <Col md={19} sm={24} xs={24} className="text-lg">
                  www.abc.xyz.com
                </Col>
              </Row>
            </Col>
            <Col md={3} sm={22} xs={24}></Col>
            <Col md={8} sm={22} xs={24} className="p-5">
              <Form name="test" onFinish={handleSubmit}>
                <Form.Item name="name">
                  <Input
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 custom-placeholder"
                  />
                </Form.Item>
                <Form.Item name="email">
                  <Input
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 custom-placeholder"
                  />
                </Form.Item>
                <Form.Item name="message">
                  <TextArea
                    placeholder="Message"
                    onChange={(e) => setMsg(e.target.value)}
                    rows={4}
                    className="h-20 custom-placeholder"
                  />
                </Form.Item>
                <Button
                  htmlType="submit"
                  className="text-lg font-bold text-black bg-yellow-500 border-none p-6">
                  Contact us
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
