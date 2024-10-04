import { getAllAppointmentsHandler } from "../controllers/appointment.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllAppointmentsHandler);

export default router;
