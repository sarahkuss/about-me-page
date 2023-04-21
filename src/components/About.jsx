import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


export default function About () {

  return (
    <main>
      <Container className="about-container">
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img className="rounded-circle" src="/images/mainphoto4.jpg" alt=""></img>
          </Col>
          
          <Col>
            <h1 className="mt-3">Sarah Kuss</h1>
            <p>Former zookeeper, future software engineer, student of life- continuously learning and growing. I love animals, plants, traveling, surfing, and playing guitar. I am very interested in AI/ML; so after years of training animals, I am ready to train computers! My goal after completing this course is to get a job as a junior software engineer where I can continue growing my skills. 
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}