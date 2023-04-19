import { Col, Container, Row } from "react-bootstrap";

export default function Quote () {
  return(
    <section>
      <Container>
        <Row className="text-center">
          <Col>
          <p><q>When I let go of what I am, I become what I might be.</q><br /> -Lao Tzu</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}