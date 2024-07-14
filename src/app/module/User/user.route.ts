/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/signup",

  validateRequest(UserValidation.userValidationSchema),
  UserController.userSignUp
);

export const UserRoutes = router;
