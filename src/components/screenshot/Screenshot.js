import React from "react";
import "./Screenshot.scss";
import image from "../images/screenshotImage2.jpg";

export default function Screenshot() {
  return (
    <div className="screenshot-container">
      <div className="screenshot-head">
        <h1>Screenshot</h1>
      </div>
      <div className="screenshot-head-para">
        <p>
        How and which Bootstrap styles you include is up to you, but the
          simplest way is to include the latest styles from the CDN. A little
          more information about the benefits of using a CDN can be found and
          which Bootstrap styles
        </p>
      </div>
      {/* <div className="screenshot-para-img-box"> */}
        <div className="screenshot-image">
          <img src={image} />
        </div>
      {/* </div> */}
      <div>
        <button className="screenshot-btn">Download Now</button>
      </div>
    </div>
  );
}
