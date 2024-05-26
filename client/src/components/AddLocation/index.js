import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Maps from "../../components/Maps";

const AddLocation = ({
  handleNext,
  handleBack,
  propertyDetails,
  setPropertyDetails,
}) => {
  const [country, ChangeCountry] = useState(propertyDetails.country);
  const [city, ChangeCity] = useState(propertyDetails.city);
  const [address, ChangeAddress] = useState(propertyDetails.address);
  const [helperText, setHelperText] = useState("");

  const handleSubmit = () => {
    if (country.length < 3 || city.length < 3 || address.length < 3) {
      <p style={{ color: "red" }}> All fields are required </p>;
      setHelperText("All fields have atleast 3 characters.");
    } else {
      setPropertyDetails((prev) => ({ ...prev, city, address, country }));
      handleNext();
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <TextField
            id="filled-search"
            label="Country *"
            variant="filled"
            size="small"
            value={country}
            onChange={(e) => ChangeCountry(e.target.value)}
          />
          <TextField
            id="filled-search"
            label="City *"
            variant="filled"
            size="small"
            value={city}
            onChange={(e) => ChangeCity(e.target.value)}
          />
          <TextField
            id="filled-search"
            label="Address or Pincode *"
            variant="filled"
            size="small"
            value={address}
            onChange={(e) => ChangeAddress(e.target.value)}
          />
        </div>
        <Maps
          address={address ? address : ""}
          city={city ? city : ""}
          country={country ? country : ""}
          height="300px"
          width="500px"
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 1, mr: 1 }}
        >
          Continue
        </Button>
        <Button disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
      </div>
      <p style={{ color: "red" }}>{helperText}</p>
    </div>
  );
};

export default AddLocation;
