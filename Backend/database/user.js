import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    // .connect("mongodb://127.0.0.1:27017", {
    .connect(process.env.MONGO_URI, {
      dbName: "Locations",
    })
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};
