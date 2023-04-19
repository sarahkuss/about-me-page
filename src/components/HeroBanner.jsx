import { Col, Container, Row } from "react-bootstrap";

export default function HeroBanner () {

  return (
    <section>
      <Container fluid className="bg-info">
        <Row>
          <Col className="text-center">
            Hi
          </Col>
        </Row>
      </Container>
    </section>
  )
}