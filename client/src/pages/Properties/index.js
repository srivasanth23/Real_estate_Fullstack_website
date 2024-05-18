import React from "react";
import SearchBar from "../../components/SearchBar/index.js";
import "./index.css";
import useProperties from "../../hooks/useProperties.js";
import LoaderView from "../../components/LoaderView/index.js";
import PropertyCard from "../../components/PropertyCard/index.js";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return <LoaderView />;
  }
  console.log(data);

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth pc-container">
        <SearchBar />
        <div className="paddings flexCenter properties">
          {
            data.map((item, i)=> (<PropertyCard item={item} key={i}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
