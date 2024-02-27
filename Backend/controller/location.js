import { Location } from "../model/location.js";

export const newLocation = async (req, res, next) => {
  try {
    const { name, latitude, longitude, timestamp } = req.body;
    await Location.create({
      name,
      latitude,
      longitude,
      timestamp,
      user: req.user._id, 
    });

    res.status(201).json({
      success: true,
      message: "Location added successfully",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



export const getMyLocations = async (req, res, next) => {
  const userid = req.user._id;
  const locations = await Location.find({ user: userid });

  res.status(200).json({
    success: true,
    locations,
  });
};

export const updateLocation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, latitude, longitude, timestamp } = req.body;

    const location = await Location.findById(id);
    if (!location) {
      return res
        .status(404)
        .json({ success: false, message: "Location not found" });
    }

    location.name = name;
    location.latitude = latitude;
    location.longitude = longitude;
    location.timestamp = timestamp;
    await location.save();

    res
      .status(200)
      .json({ success: true, message: "Location updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const deleteLocation = async (req, res, next) => {
  const locations = await Location.findById(req.params.id);

  if (!locations)
    return res.status(404).json({
      success: false,
      message: "invalid id",
    });

  await locations.deleteOne();

  res.status(200).json({
    message: "location Deleted",
    success: true,
  });
};
