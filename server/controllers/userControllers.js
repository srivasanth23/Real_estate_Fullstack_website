import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

//creating a user
export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a User");
  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });

  if (!userExists) {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.send({
      message: "User registed successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User alredy exists" });
  }
});

//booking a residency
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "This residency is already booked" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

//getting all bookings of a user
export const getAllBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });
    res.send(bookings);
  } catch (err) {
    res.status(401).json({ message: err });
  }
});

//cancelling a booking of a user
export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id); //finds index of cancelling residency
    if (index == -1) {
      res.send("Booking not found").status(404);
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: { bookedVisits: user.bookedVisits },
      });
      res.send("Booking cancelled successfully");
    }
  } catch (e) {
    res.status(401).json({ message: e });
  }
});

//to add a residencies to fav of a user
export const addFavResidencies = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesId.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesId: {
            set: user.favResidenciesId.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "Removed from favourites", data: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesId: {
            push: rid,
          },
        },
      });
      res.send({ message: "Added to favourites", data: updateUser });
    }
  } catch (e) {
    res.send(e);
  }
});

// get all favourite residencies
export const getAllFavResidencies = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const getFav = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesId: true },
    });
    res.status(200).send(getFav);
  } catch (e) {
    res.status(401).send(e);
  }
  
});
