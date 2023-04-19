import { Col, Container, Row, Carousel } from "react-bootstrap";

export default function PicCarousel () {
  
  return (
    <section>
      <Container className="carousel-container">
        <Row> 
          <Col sm={12} className="p-0">
            <Carousel fade>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=2"
                  className="d-block w-100"
                  alt="slide 1" />
                <Carousel.Caption>
                  <h2>First Item</h2>
                  <p>First item description</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=3" 
                  className="d-block w-100"
                  alt="slide 2" />
                <Carousel.Caption>
                <h2>Second Item</h2>
                <p>Second item description</p>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=4" 
                  className="d-block w-100"
                  alt="slide 3" />
                <Carousel.Caption>
                  <h2>Second Item</h2>
                  <p>Second item description</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}