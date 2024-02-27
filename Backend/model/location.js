import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      default: true,
    },

    user:{
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
    },
    CreatedAt: {
      type: Date,
      default: Date.now,
    },
  })
 export const Location = mongoose.model("Location", schema);