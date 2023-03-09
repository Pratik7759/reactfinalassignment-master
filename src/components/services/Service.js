import React from "react";
import "./Service.scss";
import image1 from "../images/download.jpg";
import image2 from "../images/images.jpg";
import image3 from "../images/download.jpg";
import image4 from "../images/images.jpg";
import image5 from "../images/download.jpg";
import image6 from "../images/images.jpg";

export default function Service() {
  return (
    <div className="service-container">
      <div className="service-head">
        <h1>Services</h1>
      </div>
      <div className="service-head-para">
        <p >
          How and which Bootstrap styles you include is up to you, but the
          simplest way is to include the latest styles from the CDN. A little
          more information about the benefits of using a CDN can be found and
          which Bootstrap styles.
        </p>
      </div>
      <div className="wrapper">
        <div className="service-image">
          <img src={image1} />
        </div>
        <div className="service-image">
          <img src={image2} />
        </div>
        <div className="service-image">
          <img src={image3} />
        </div>
        <div className="service-image">
          <img src={image4} />
        </div>
        <div className="service-image">
          <img src={image5} />
        </div>
        <div className="service-image">
          <img src={image6} />
        </div>
      </div>
    </div>
  );
}
