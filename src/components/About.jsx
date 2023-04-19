import { Col, Container, Row } from "react-bootstrap";

export default function About () {
  
  return (
    <main>
      <Container className="bg-danger">
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img src="https://picsum.photos/300/300"
            className="rounded-circle"
            alt="profile" />
          </Col>
          
          <Col>
            <h1 className="mt-3">Sarah Kuss</h1>
            <p>Former zookeeper, future Software Engineer,  student of life- continuously learning and growing. I left my dream career to pursue a better future; one that allows me the freedom to give back to my community and contribute to conservation efforts. I love animals, plants, traveling, surfing, and playing guitar. My goal after completing the course is to get a job as a junior software engineer where I can continue growing my skills. 
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}