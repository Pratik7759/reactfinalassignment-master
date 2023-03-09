import React from "react";
import image from "../images/images.jpg";
import "./Blog.scss";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="our-blog-head">
        <h1>Our Blog</h1>
      </div>
      <div className="blog-head-para">
        <p >
        How and which Bootstrap styles you include is up to you, but the
          simplest way is to include the latest styles from the CDN. A little
          more information about the benefits of using a CDN can be found and
          which Bootstrap styles
        </p>
      </div>
      <Row xs={1} md={2} className="g-4" className="blog">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text className="blog-para">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
         
      </Row>
    </div>
  );
}
