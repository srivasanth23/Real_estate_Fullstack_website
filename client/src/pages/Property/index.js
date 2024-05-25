import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import LoaderView from "../../components/LoaderView";
import ErrorComponent from "../../components/ErrorComponent";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Maps from "../../components/Maps";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
import BookingModel from "../../components/BookingModel";
import useAuthCheck from "../../hooks/useAuthCheck";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { user } = useAuth0();
  

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  const [modelOpened, setmodelOpened] = useState(false);
  const { validateLogin } = useAuthCheck();

  if (isError) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <LoaderView />;
  }

  return (
    <div className="wrapper">
      <div className="property-container innerWidth paddings flexColStart">
        <div className="like">
          <AiFillHeart size={30} color="white" />
        </div>
        <img src={data?.image} alt="home-img" />

        <div className="flexCenter property-details">
          <div
            className="flexColStart left"
            style={{ flexDirection: "column", width: "100%" }}
          >
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>
            <div className="facilities flexStart">
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities.bathrooms} Bathrooms </span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities.parkings} Parkings </span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities.bedrooms} Room/s </span>
              </div>
            </div>
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
            <div className="flexStart" style={{ gap: "1rem" }}>
              <FaLocationDot size={20} color="#1F3E72" />
              <span className="secondaryText">
                {data?.address}, {data?.city}, {data?.country}
              </span>
            </div>

            <button
              className="button"
              onClick={() => validateLogin() && setmodelOpened(true)}
            >
              Book Your Visit
            </button>
          </div>

          <BookingModel
            opened={modelOpened}
            setOpened={setmodelOpened}
            propertyId={id}
            email={user?.email}
          />

          <div className="right-property-map">
            <Maps
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
