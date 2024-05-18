import React from "react";
import SearchBar from "../../components/SearchBar/index.js";
import "./index.css";
import useProperties from "../../hooks/useProperties.js";


const Properties = () => {
  const {data, isError, isLoading} = useProperties();
  console.log(data)
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth pc-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Properties;
