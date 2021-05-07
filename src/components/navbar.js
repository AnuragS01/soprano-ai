import React from "react";
import { ReactComponent as Logo } from "../assets/svg/soprano-ai.svg";

const Navbar = () => {
  return (
    <div className="navbar content_width">
      <Logo className="logo" />
      <h1 className="home info">Home</h1>
      <h1 className="products info">Products</h1>
      <h1 className="about-us info">About us</h1>
      <h1 className="demos info">Demos</h1>
      <h1 className="contact-us info">Contact us</h1>
      <h1 className="about-me info">About Me</h1>
    </div>
  );
};

export default Navbar;
