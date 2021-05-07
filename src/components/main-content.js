import React from "react";
import Img1 from "../assets/img/image.png";
import Img2 from "../assets/img/image2.png";
import Img3 from "../assets/img/Screenshot1.png";
import Img4 from "../assets/img/Screenshot2.png";

const Main = () => {
  return (
    <div className="main content_width">
      <div>
        <img className="img1" src={Img1} alt="" />
        <img className="img2" src={Img2} alt="" />
      </div>
      <div>
        <h1 className="main_heading">
          Essential Mobile App Landing for Workspaces
        </h1>
        <p className="para1">
          A mobile app landing page is important and essential for right amount
          of information about your product. Start increasing your user base
          upon the launch of your product
        </p>
      </div>
      <div className="hr1"></div>
      <button className="btn_demos">Explore Demos --{`>`} </button>
      <div>
        <h3 className="head2">Explore our demos</h3>
        <p className="para2">
          Explore our landing Page demos on different kind of topics. More Demos
          are coming soon.
        </p>
      </div>
      <div>
        <img src={Img3} alt="" className="img3" />
        <h2 className="head3">Website Landing</h2>
        <img src={Img4} alt="" className="img4" />
        <h2 className="head4">App Modern Landing</h2>
      </div>
      <div className="hr2"></div>
      <div>
        <h2 className="head5">Start your business journey with Soprano</h2>
        <p className="para3">
          Try Shopify for free, and explore all the tools and services you need
          to start, run, and grow your business.
        </p>
      </div>
      <div>
        <div>
          <i className="fas fa-globe-africa globe" />
          <h3 className="head6">Move Your Business Online</h3>
          <p className="para4">
            Create a business, whether you’ve got a fresh idea or are looking
            for a new way to make money.
          </p>
        </div>
        <div>
          <i className="fas fa-user-friends user" />
          <h3 className="head7">Switch to soprano</h3>
          <p className="para5">
            Bring your business to Soprano, no matter which ecommerce platform
            you’re currently using.
          </p>
        </div>
        <div>
          <i className="far fa-smile smile" />
          <h3 className="head8">Enjoy ur benefits</h3>
          <p className="para6">
            Get set up with the help of a trusted freelancer or agency from the
            Shopify Experts Marketplace.
          </p>
        </div>
      </div>
      <button className="btn_trial">Start free Trial</button>
      <div className="hr3"></div>
    </div>
  );
};

export default Main;
