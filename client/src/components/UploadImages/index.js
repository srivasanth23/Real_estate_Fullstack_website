import React from "react";
import Button from "@mui/material/Button";

const UploadImages = ({
  handleNext,
  handleBack,
  propertyDetails,
  setPropertyDetails,
}) => {
  const [images, setImages] = React.useState(propertyDetails.image);

  const handleSubmit = () => {
    setPropertyDetails((prev) => ({ ...prev, image: images }));
    handleNext();
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
        
      <Button variant="contained" onClick={handleSubmit} sx={{ mt: 1, mr: 1 }}>
        Continue
      </Button>
      <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
        Back
      </Button>
    </div>
  );
};

export default UploadImages;
