import { Col, Container, Row } from "react-bootstrap"
import { Github, Linkedin } from "react-bootstrap-icons"

export default function Footer () {
  const currentYear = new Date().getFullYear()
  const githubUrl = "https://github.com/sarahkuss"
  const linkInUrl = "https://www.linkedin.com/in/sarah-kuss/"
  return (
    <footer>
      <Container>
        <Row>
          <Col className= "footer-col text-center">
            <p>&copy; {currentYear} &nbsp;
            <a href={githubUrl} target="_blank" rel="noreferrer"><Github /></a> &nbsp;
            <a href={linkInUrl} target="_blank" rel="noreferrer"><Linkedin /></a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}