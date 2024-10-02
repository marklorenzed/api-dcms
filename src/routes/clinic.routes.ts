import { getAllClinicHandler } from "../controllers/clinic.controller";
import express from "express";

const router = express.Router();

router.get("/", getAllClinicHandler);

export default router;
