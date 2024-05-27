import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";


const BasicDetails = ({
  handleNext,
  handleBack,
  propertyDetails,
  setPropertyDetails,
}) => {
  const [title, ChangeTitle] = useState(propertyDetails.title);
  const [description, ChangeDescription] = useState(
    propertyDetails.description
  );
  const [price, ChangePrice] = useState(propertyDetails.price);
  const [helperText, setHelperText] = useState("");

  const handleSubmit = () => {
    if (title.length < 3 || price < 999) {
      setHelperText(
        "Tile must be atleast 3 characters & price must be more than 999"
      );
    } else {
      setPropertyDetails((prev) => ({ ...prev, title, description, price }));
      handleNext();
    }
  };

  useEffect(() => {
    if (title.length === 3 && price < 999) {
      setHelperText("");
    }
  }, [title, description, price]);

  return (
    <div
      className="flexCenter"
      style={{
        flexDirection: "column",
        marginTop: "2rem",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <TextField
          id="filled-search"
          label="Title *"
          variant="filled"
          size="small"
          value={title}
          onChange={(e) => ChangeTitle(e.target.value)}
        />
        <TextField
          id="filled-search"
          label="Description"
          variant="filled"
          size="small"
          value={description}
          multiline
          onChange={(e) => ChangeDescription(e.target.value)}
        />

        <FormControl size="small" variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            value={price}
            onChange={(e) => ChangePrice(e.target.value)}
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <p style={{ color: "red" }}>{helperText}</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 1, mr: 1 }}
        >
          Continue
        </Button>
        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default BasicDetails;
