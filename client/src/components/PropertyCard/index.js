import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./index.css";
import { truncate } from "lodash";
import { Link } from "react-router-dom";

const PropertyCard = ({ item }) => {
  return (
    <Link to={`../properties/${item.id}`}>
      <div className="flexColStart rc-card">
        <AiFillHeart size={25} color="white" />
        <img src={item.image} alt="home" className="image-carousal" />
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span> {item.price}
        </span>
        <span className="primaryText">
          {truncate(item.title, { length: 20 })}
        </span>
        <span className="secondaryText">
          {truncate(item.description, { length: 50 })}
        </span>
      </div>
    </Link>
  );
};

export default PropertyCard;
