import React from "react";
import "./ControlledCarousel.css";
import image from "../images/images.jpg";

export default function ControlledCarousel() {
  return (
    <div className="banner">
      <img src={image} alt="banner" />
      <div className="heading">
        <div>
          <h1>Basic Template</h1>
        </div>
        <div>
          <p className="heading-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem
          </p>
        </div>
        <div>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
}
