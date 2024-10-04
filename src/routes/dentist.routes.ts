import express from "express";
import {
  createDentistHandler,
  deleteDentist,
  getAllDentistsHandler,
  getDentistHandler,
  updateDentistHandler,
} from "../controllers/dentist.controller";
import { validateHandler } from "../helper";
import { dentistSchema } from "../schemas";

const router = express.Router();

router.get("/", getAllDentistsHandler);
router.get("/:id", getDentistHandler);

router.post("/", validateHandler(dentistSchema), createDentistHandler);

router.patch("/:id", validateHandler(dentistSchema), updateDentistHandler);

router.delete("/:id", deleteDentist);

export default router;
