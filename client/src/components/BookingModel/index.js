import React, { useState } from "react";
import "./index.css";
import { IoCloseSharp } from "react-icons/io5";
import { Box, Button, Modal, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { bookVisit } from "../../utils/api";
import { toast } from "react-toastify";

const BookingModel = ({ opened, setOpened, propertyId, email }) => {
  const [selected, setSelected] = useState(null);

  
  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right"
    })
  }
  const onError = () => {

  }
  
  const callBookVisit = async () => {
    const booked = await bookVisit(selected, email, propertyId);
    if(booked){
      handleBookingSuccess()
    }
  };




  return (
    <Modal
      open={opened}
      onClose={setOpened}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <div className="modalHeader">
          <Typography id="modal-title" variant="h6" component="h2">
            Select your date of visit
          </Typography>
          <Button onClick={() => setOpened(false)}>
            <IoCloseSharp size={25} />
          </Button>
        </div>
        <DatePicker
          dateFormat="Pp"
          selected={selected}
          onSelect={setSelected}
          className="datePicker"
          minDate={new Date()}
          maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
          placeholderText="Select date"
        />
        {selected && <p>Selected date: {selected.toString()}</p>}
        <Button
          variant="contained"
          style={{ marginTop: "20px" }}
          onClick={() => callBookVisit() && setOpened(false)}
          disabled={!selected}
          className="booking-button"
        >
          Confirm Visit
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default BookingModel;
