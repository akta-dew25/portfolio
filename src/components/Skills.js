import React from "react";
import { Row, Col, Card } from "antd";
import { skills } from "../data";

function Skills() {
  return (
    <div className="flex text-white h-full pt-20 pb-40">
      <Row gutter={[0, 20]}>
        <Col md={2} sm={22} xs={24}></Col>
        <Col md={16} sm={24} xs={24} className="mx-5">
          <Row>
            <Col md={24} xs={24} sm={22}>
              <h1 className="font-bold text-3xl">
                Skills &amp;{" "}
                <span className="text-yellow-500">Technologies </span>
              </h1>
            </Col>
          </Row>

          <Row>
            <Col md={24} xs={24} sm={22}>
              <p className="text-gray-400 text-lg pt-8 mr-5">
                I possess a strong foundation in front-end development, with
                expertise in HTML, CSS, and JavaScript. Proficient in modern
                frameworks such as React.js, I excel at creating responsive and
                user-friendly web applications. My skills extend to version
                control with Git, UI/UX design principles, and optimizing
                performance to deliver seamless user experiences. Continuously
                learning and adapting, I am committed to staying updated with
                the latest trends and technologies in web development.
              </p>
            </Col>
          </Row>
        </Col>
\        <Col md={24} sm={24} xs={24}>
          <Row gutter={[20, 20]} className="p-2">
            <Col md={2} sm={22} xs={24}></Col>
            {skills.map((skill, index) => (
              <Col xs={24} sm={24} md={3}>
                <Card
                  className="bg-gray-900 text-yellow-500 skill-card text-center p-4"
                  hoverable>
                  <p className="text-lg font-bold">{skill}</p>
                </Card>
              </Col>
            ))}
            <Col md={3} sm={22} xs={24}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Skills;
