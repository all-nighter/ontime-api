import mongoose from "mongoose";

const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver",
  },
  departure: {
    type: String,
    required: true,
  },
  departureLocationPoint: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  destination: {
    type: String,
    required: true,
  },
  destinationLocationPoint: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  numberOfPassengers: {
    type: Number,
  },
  numberOfProtectors: {
    type: Number,
  },
  // subscriptionWeeks: {
  //   type: Number,
  //   required: true,
  // },
  frequencyOfWeek: {
    type: [Number],
    required: true,
  },
  subscribedAt: {
    type: Date,
  },
  hour: {
    type: String,
  },
  minute: {
    type: String,
  },
  estimatedTimeSeconds: {
    type: Number,
    required: true,
  },
});

// subscriptionSchema.pre("save", async function (next) {
//   if (this.isNew) {
//     const alreadyHasOne = await Subscription.findOne({
//       email: this.email,
//     });
//     if (alreadyHasOne) throw new Error("Error");
//     next();
//   }
// });

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
