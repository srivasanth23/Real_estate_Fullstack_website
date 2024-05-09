import "./index.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const ResidenciesCarousal = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth residencies-carousal">
        <div className="rc-heading flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SilderButtons />
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart rc-card">
                <img src={item.image} alt="home" className="image-carousal" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span> {item.price}
                </span>
                <span className="primaryText">{item.name}</span>
                <span className="secondaryText">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ResidenciesCarousal;

const SilderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="rc-buttons flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
