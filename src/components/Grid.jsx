import { Col, Container, Row } from "react-bootstrap";

export default function Grid () {
  return(
    <section>
      <Container className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2 className="text-center">Why Boca Code?</h2>
            <p> The decision to leave the animal field was one that I struggled with for a very long time, but knew it was necessary if I wanted a better future. After discovering software development, I realized I could get the best of both worlds. I could have a fulfilling career that would give me the tools to create a connection between people and conservation through technology, and the stability to be able to volunteer my free time. After finding Boca Code, the decision was easy; not only because it's in-person, but because of the amazing community they have fostered. </p>
          </Col>
          <Col>
            <h2 className="text-center">Ideal Workplace</h2>
            <p>My ideal workplace is one that is positive, supportive, and values people’s differences. One that has opportunities for growth and development, flexibility, and a collaborative/team environment.
</p>
          </Col>

          <Col sm={12} md={4}>
            <h2 className="text-center">Projects</h2>
            <p>Many people want to get involved in their community or contribute to conservation, but most don’t even know where to begin. My goal is to build a website/app that gives people information on how they can get involved, both locally and globally. It would have a database of non-profit conservation organizations, with brief descriptions, how they can get involved/donate, and a link to the organizations website. It would also have a search feature where the person can enter their location/zip code and it would populate local organizations/community service opportunities. 
</p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}