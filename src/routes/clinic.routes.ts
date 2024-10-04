import {
  createClinicHandler,
  deleteClinicHandler,
  getAllClinicHandler,
  getClinicHandler,
  updateClinicHandler,
} from "../controllers/clinic.controller";
import express from "express";
import { validateHandler } from "../helper";
import { clinicSchema } from "../schemas";

const router = express.Router();

router.get("/", getAllClinicHandler);
router.get("/:id", getClinicHandler);

router.post("/", validateHandler(clinicSchema), createClinicHandler);

router.patch("/:id", validateHandler(clinicSchema), updateClinicHandler);

router.delete("/:id", deleteClinicHandler);
export default router;
