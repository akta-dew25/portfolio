import React from "react";
import { Row, Col, Card } from "antd";
import { testimonials } from "../data";

const { Meta } = Card;

function Testimonials() {
  return (
    <div className="flex text-white h-full py-20">
      <Row gutter={[20, 16]}>
        <Col md={10} sm={22} xs={24}></Col>
        <Col md={12} sm={22} xs={24} className="mx-5">
          <h1 className="font-bold text-3xl">
            <span>Client</span>
            <span className="text-yellow-500"> Testimonials</span>
          </h1>
        </Col>
        <Col md={5} sm={22} xs={24}></Col>
        <Col md={14} sm={24} xs={24}>
          <p className="text-gray-400 text-lg text-center mr-5">
            Read what clients and colleagues have to say about my work. Their
            feedback highlights my dedication, problem-solving skills, and the
            positive impact my contributions have had on their projects and
            teams. These testimonials reflect my commitment to delivering
            high-quality, user-friendly web applications.
          </p>
        </Col>
        <Col md={5} sm={22} xs={24} span={3}></Col>

        <Col md={7} sm={22} xs={24}></Col>
        <Row gutter={[50, 25]} className="py-10">
          <Col md={4} sm={24} xs={24}></Col>
          {testimonials?.map((testimonial) => (
            <Col md={8} sm={22} xs={24} className="text-white">
              <Card
                className="bg-gray-900 border-none text-white p-5"
                hoverable
                cover={
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="h-48 object-cover object-center"
                  />
                }>
                <Meta
                  description={<p className="italic">"{testimonial.quote}"</p>}
                />
                <p className="mt-2 font-bold text-xl mt-5">
                  {testimonial.name}
                </p>
                <p className="text-yellow-500 font-bold mt-5">
                  {testimonial.company}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export default Testimonials;
