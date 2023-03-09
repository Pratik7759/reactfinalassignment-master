import React from "react";
import "./Navbar.scss";
// import ReactDOM from 'react-dom/client';

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">BOCIC</div>
      <div class="links">
        <div class="link">
          <a>Home</a>
        </div>
        <div class="link">
          <a>About</a>
        </div>
        <div class="link">
          <a>Service</a>
        </div>
        <div class="link">
          <a>Screenshot</a>
        </div>
        <div class="link">
          <a>Blog</a>
        </div>
        <div class="link">
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  );
}
