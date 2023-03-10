import React from "react";
import image from "../images/screenshotImage1.jpg";
import "./About.scss";
import { Container, Row, Col } from "reactstrap";

export default function About() {
  return (
    <>
     <div className="about-container">
        <Container >
          <Row>
            <div className="head">
              <h1>About Information</h1>
            </div>
            <Col md={6} className="order-2 order-md-1">
              <div className="ms-5 mt-5 w-75">
                <h3>DIRECTED BY READABLE</h3>
                <p id="middle">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32
                </p>
              </div>
            </Col>
            <Col md={6} className="order-1 order-md-2">
              <div className="mt-5">
                <img
                  className="about-image"
                  src={image}
                  alt="about-image"
                ></img>
              </div>
            </Col>
          </Row>
          <div>
              <button className="about-btn">Read More</button>
            </div>
        </Container>
        </div>
    </>
  );
}

{
  /* <div className="about-container">
<div className="head">
  <h1>About Information</h1>
</div>
<div className="head-para">
  <p>
    How and which Bootstrap styles you include is up to you, but the
    simplest way is to include the latest styles from the CDN. A little
    more information about the benefits of using a CDN can be found and
    which Bootstrap styles
  </p>
</div>
<div className="about-para-img-box">
  <div className="about-para">
    <p>
      <h2 >DISTRACTED BY THE READABLE</h2>
      Contrary to popular belief, Lorem Ipsum is not simply random text.
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin professor
      at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur, from a Lorem Ipsum passage, and
      going through the cites of the word in classical literature,
      discovered the undoubtable source. Lorem Ipsum comes from sections
      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
      of Good and Evil) by Cicero, written in 45 BC. This book is a
      treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32
    </p>
  </div>
  <div className="about-image">
    <img src={image} />
  </div>
</div>
<div>
  <button className="about-btn">Read More</button>
</div>
</div> */
}
