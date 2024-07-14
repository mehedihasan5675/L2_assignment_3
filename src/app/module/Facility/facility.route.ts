/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FacilityController } from "./facility.controller";
import { FacilityValidation } from "./facility.validation";

const router = express.Router();

router.post(
  "/",

  validateRequest(FacilityValidation.facilityValidationSchema),
  FacilityController.createFacility
);

export const FacilityRoute = router;
