import express from "express";
import {
  newLocation,
  getMyLocations,
  updateLocation,
  deleteLocation,
} from "../controller/location.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/locations", isAuthenticated, newLocation);
router.get("/allLocations", isAuthenticated, getMyLocations);

router
  .route("/:id")
  .put(isAuthenticated, updateLocation)
  .delete(isAuthenticated, deleteLocation);

export default router;
