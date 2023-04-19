import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function About () {
  const [imgUrl, setImgUrl] = useState("https://picsum.photos/300/300")
  const [nameColor, setNameColor] = useState("blue")
  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
            <img 
            src={imgUrl}
            className="rounded-circle"
            alt="profile" />
          <Button onClick={() => setImgUrl("https://picsum.photos/300/300?random")}>Change Image</Button>

          <Button onClick={() => setNameColor("red")}>Change Color</Button>
          </Col>
          
          <Col>
            <h1 style={{color: nameColor}} className="mt-3">Sarah Kuss</h1>
            <p>Former zookeeper, future Software Engineer,  student of life- continuously learning and growing. I left my dream career to pursue a better future; one that allows me the freedom to give back to my community and contribute to conservation efforts. I love animals, plants, traveling, surfing, and playing guitar. My goal after completing the course is to get a job as a junior software engineer where I can continue growing my skills. 
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  )
}