import { getAllPatientsHandler } from "../controllers/patient.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllPatientsHandler);

export default router;
