import { Col, Container, Row } from "react-bootstrap"

export default function Footer () {
  const currentYear = new Date().getFullYear()
  const githubUrl = "https://github.com/sarahkuss/about-me-page"
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear}</p>
            <p><a href={githubUrl} target="_blank" rel="noreferrer">Code in Github</a>  </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}