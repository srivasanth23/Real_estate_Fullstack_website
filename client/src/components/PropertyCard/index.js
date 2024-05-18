import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./index.css";
const PropertyCard = ({ item }) => {
  return (
    <div className="flexColStart rc-card">
      <AiFillHeart size={25} color="white"/>
      <img src={item.image} alt="home" className="image-carousal" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span> {item.price}
      </span>
      <span className="primaryText">{item.title}</span>
      <span className="secondaryText">{item.description}</span>
    </div>
  );
};

export default PropertyCard;
