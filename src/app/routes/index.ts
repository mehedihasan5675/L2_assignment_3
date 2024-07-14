import { Router } from "express";
import { FacilityRoute } from "../module/Facility/facility.route";
import { UserRoutes } from "../module/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/facility",
    route: FacilityRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)); // This will automatically loop your routes that you will add in the moduleRoutes array

export default router;
