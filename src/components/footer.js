import React from "react";
import { ReactComponent as Logo } from "../assets/svg/soprano-ai.svg";
import { ReactComponent as Logot } from "../assets/svg/twitter.svg";
import { ReactComponent as Logof } from "../assets/svg/facebook.svg";
import { ReactComponent as Logoi } from "../assets/svg/instagram.svg";

const Footer = () => {
  return (
    <div className="footer content_width">
      <Logo className="logo" />
      <Logot className="twitter" />
      <Logof className="facebook" />
      <Logoi className="instagram" />
      <h1 className="copyright">Copyright 2020 soprano.ai</h1>
    </div>
  );
};

export default Footer;
