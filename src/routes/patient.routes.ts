import {
  createPatientHandler,
  deletePatientHandler,
  getAllPatientsHandler,
  getPatientHandler,
  updatePatientHandler,
} from "../controllers/patient.controller";
import express from "express";
import { validateHandler } from "../helper";
import { patientSchema } from "../schemas";

const router = express.Router();

router.get("/", getAllPatientsHandler);
router.get("/:id", getPatientHandler);

router.post("/", validateHandler(patientSchema), createPatientHandler);

router.patch("/:id", validateHandler(patientSchema), updatePatientHandler);

router.delete("/:id", deletePatientHandler);
export default router;
