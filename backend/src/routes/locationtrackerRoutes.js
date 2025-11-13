import express from "express";
import {
  updateUserLocation,
  getAllActiveLocations,
  deactivateLocation,
} from "../controllers/locationtrackerController.js";

const router = express.Router();

// ✅ POST - Add or Update User Location
router.post("/", updateUserLocation);

// ✅ GET - All active user locations (Admin)
router.get("/", getAllActiveLocations);

// ✅ PUT - Deactivate user location
router.put("/:userId", deactivateLocation);

export default router;
