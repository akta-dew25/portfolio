import { Row, Col, Card } from "antd";
import React from "react";
import { projects } from "../data";

const { Meta } = Card;

function Projects() {
  return (
    <div className="flex text-white h-full py-20">
      <Row gutter={[0, 20]}>
        <Col md={2} sm={22} xs={24}></Col>
        <Col md={8} sm={22} xs={24} className="mx-5">
          <Row>
            <Col md={24} xs={24} sm={22} className="font-bold text-3xl">
              <span>Project</span>
              <span className="text-yellow-500"> Details </span>
            </Col>
          </Row>
          <Row>
            <Col md={24} xs={24} sm={24}>
              <p className="text-gray-400 text-lg pt-8 mr-5">
                Created a personal portfolio website to showcase my projects and
                skills using HTML, CSS, and JavaScript. Implemented modern
                design principles, ensuring a seamless user experience across
                devices.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={16} sm={24} xs={24}></Col>
        <Row gutter={[25, 0]}>
          <Col md={1} sm={22} xs={24} className="mx-12"></Col>
          {projects?.map((project) => (
            <Col md={5} sm={22} xs={24} className="text-white pb-3">
              <Card
                className="bg-gray-900 border-none text-white p-4"
                hoverable
                cover={<img alt={project.title} src={project.image} />}>
                <Meta title={project.title} description={project.subtitle} />
                <p className="mt-2 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-500 font-bold mt-5 text-base">
                  View Project
                </a>
              </Card>
            </Col>
          ))}
          <Col md={2} sm={22} xs={24}></Col>
        </Row>
      </Row>
    </div>
  );
}

export default Projects;
