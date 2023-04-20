import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
  {saying: "When I let go of what I am, I become what I might be.", author: "Lao Tzu"},
  {saying: "This is a different quote", author: "Lao Tzu - 老子"},
  {saying: "Anotha One", author: "Lao Tzu - 老子"}
]

export default function Quote () {
  const [i,setI] = useState(0)
  const nextQuote = () => {
    if(i<quotes.length -1) setI(i+1)
    else setI(0)
  }
  return(
    <section>
      <Container onClick={nextQuote} className="quote-container">
        <Row className="text-center">
          <Col>
          <p><q>{quotes[i].saying}</q><br />- {quotes[i].author}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}