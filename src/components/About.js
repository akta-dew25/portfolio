import { Button, Space, Row, Col } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleProjectClick = () => {
    navigate("/projects");
  };

  return (
    <div className="flex text-white h-full py-20">
      <Row gutter={[0, 20]} className="m-5">
        <Col md={2} xs={24} sm={22}></Col>
        <Col md={10} xs={24} sm={22}>
          <Row>
            <Col md={24} xs={24} sm={22}>
              <p className="text-white text-2xl">
                Hello,
                <span className="text-yellow-500 font-bold"> Welcome </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={24} xs={24} sm={22}>
              <h1 className="text-white font-bold text-2xl py-10">
                I m Akta Dewangan
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={24} xs={24} sm={24}>
              <p className="text-gray-400 pb-10 font-bold">
                I am a passionate Front-End Developer with 2 years of experience
                specializing in creating responsive and user-friendly web
                applications. Proficient in HTML, CSS, JavaScript, and
                frameworks like React.js, I have successfully contributed to
                various projects. Known for my problem-solving skills and
                ability to optimize performance, I thrive in collaborative
                environments and continuously seek to improve my expertise in
                modern web development technologies.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={24} xs={24} sm={24}>
              <Space className="mt-5 gap-5">
                <Button
                  className="text-lg bg-yellow-500 border-yellow-500 font-bold p-5"
                  onClick={handleContactClick}>
                  Contact Me
                </Button>
                <Button
                  className="text-lg bg-yellow-500 border-yellow-500 font-bold p-5"
                  onClick={handleProjectClick}>
                  Projects
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
        <Col md={2} sm={24} xs={24} className="mt-10"></Col>
        <Col md={8} sm={22} xs={24} className="mt-5">
          <img src="./coding.svg" className="object-cover object-center" />
        </Col>
        <Col md={2} sm={24} xs={24}></Col>
      </Row>
    </div>
  );
}

export default About;
