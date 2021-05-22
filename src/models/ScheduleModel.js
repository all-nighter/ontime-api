import mongoose from "mongoose";

const { Schema } = mongoose;

const scheduleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
    required: true,
  },
  departure: {
    type: String,
    required: true,
  },
  departureLocationPoint: {
    type: String,,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  destinationLocationPoint: {
    type: String,
    required: true,
  },
  numberOfPassengers: {
    type: Number,
  },
  subscriptionWeeks: {
    type: Number,
    required: true,
  },
  subscribedAt: {
    type: Date,
  }
});


export const Schedule = mongoose.model("Schedule", scheduleSchema);
