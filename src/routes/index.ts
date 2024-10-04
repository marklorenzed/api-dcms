import { Router } from "express";
import appointmentRoutes from "./patient.routes";
import clinicRoutes from "./clinic.routes";
import dentistRoutes from "./dentist.routes";
import patientRoutes from "./patient.routes";
const router = Router();

router.use("/appointment", appointmentRoutes);
router.use("/clinic", clinicRoutes);
router.use("/patient", patientRoutes);
router.use("/dentist", dentistRoutes);

export default router;
