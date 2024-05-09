import React from "react";
import CountUp from "react-countup";
import "./index.css";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home-wrapper">
      <div className="paddings innerWidth flexCenter home-container">
        {/* Left Section */}
        <div className="flexColStart home-left">
          <div className="home-title">
            <div className="orange-circle" />
            <h1>
              Find <br />
              Your Next <br />
              Home
            </h1>
          </div>

          <div className="flexColStart secondaryText home-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter searchElement">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8500} end={9000} durarion={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1500} end={2000} durarion={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={25} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter home-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="houses" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
