import { Col, Container, Row } from "react-bootstrap";

export default function Grid () {
  return(
    <section>
      <Container fluid className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center">Why Boca Code?</h2>
            <p>I chose Boca Code because it is an in-person bootcamp, led by professionals who have decades of real-world experience in the field. I love the close-knit community they have developed and fostered and look forward to being a part of that. 
After working a labor-intensive job for most of my 20’s, I realized it wasn’t sustainable. Working with animals is my passion, so I wanted to find something that would allow me to still be a part of that. Working as a software engineer, I would be able to develop programs to connect people with nature, and volunteer my free time at an animal care facility.
</p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center">Project</h2>
            <p>Many people want to get involved in their community or contribute to conservation, but most don’t even know where to begin. My goal is to build a website/app that tells people how they can get involved, both locally and globally. It would have a database of non-profit conservation organizations, with brief descriptions, how they can get involved/donate, and a link to the organizations website. It would also have a search feature where the person can enter their location/zip code and it would populate local organizations/community service opportunities. 
</p>
          </Col>

          <Col>
            <h2 className="text-center">Ideal Workplace</h2>
            <p>My ideal workplace is one that is positive, supportive, and values people’s differences. One that has opportunities for growth and development, flexibility, and a collaborative/team environment.
</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}