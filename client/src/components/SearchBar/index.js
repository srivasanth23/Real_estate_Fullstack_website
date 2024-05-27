import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="searchElement">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for location/title"
      />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
