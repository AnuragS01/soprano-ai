import React from "react";
import Img5 from "../assets/img/img-client.png";
import Img6 from "../assets/img/img-client-2.png";

const Review = () => {
  return (
    <div>
      <h3 className="head9">What Clients say about our product</h3>
      <div className="review1"></div>
      <img className="img_client1" src={Img5} alt="" />
      <h3 className="name1">Allen Jones</h3>
      <p className="review_para1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
        tempor incididunt labore dolore features that Lorem ipsum dolor sit amet
        consectetur.
      </p>
      <div className="review2"></div>
      <img className="img_client2" src={Img6} alt="" />
      <h3 className="name2">Allen Jones</h3>
      <p className="review_para2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
        tempor incididunt labore dolore features that Lorem ipsum dolor sit amet
        consectetur.
      </p>
    </div>
  );
};

export default Review;
