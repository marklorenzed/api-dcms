import { Router } from "express";
import clinicRoutes from "./clinic.routes";
const router = Router();

router.use("/clinic", clinicRoutes);

export default router;
