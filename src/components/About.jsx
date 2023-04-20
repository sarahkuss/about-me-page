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
            <h1 className="mt-3">Sarah Kuss Küß</h1>
            <p>Former zookeeper, future Software Engineer,  student of life- continuously learning and growing. I left my dream career to pursue a better future; one that allows me the freedom to give back to my community and contribute to conservation efforts. I love animals, plants, traveling, surfing, and playing guitar. My goal after completing the course is to get a job as a junior software engineer where I can continue growing my skills. 
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}