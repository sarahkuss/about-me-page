import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const quotes = [
  {saying: "When I let go of what I am, I become what I might be.", author: "老子 (Lao Tzu)"},
  {saying: "Anywhere you can lead your life, you can lead a good one.", author: "Marcus Aurelius"},
  {saying: "Tell me and I forget, teach me and I may remember, involve me and I learn", author: "Benjamin Franklin"}
]

export default function Quote () {
  const [i,setI] = useState(0)
  const nextQuote = () => {
    if(i<quotes.length -1) setI(i+1)
    else setI(0)
  }
  return(
    <section>
      <Container onMouseEnter={nextQuote} className="quote-container">
        <Row className="text-center">
          <Col>
          <p><q>{quotes[i].saying}</q><br />- {quotes[i].author}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}