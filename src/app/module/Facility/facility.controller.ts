import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { FacilityService } from "./facility.service";

// Below you can see the application of catchAsync function.
const createFacility = catchAsync(async (req, res) => {
  const facilityData = req.body;
  const result = await FacilityService.createFacilityIntoDB(facilityData);

  // Below you can see the use of custom sendResponse function to make the code base clean.
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Facility added succesfully",
    data: result,
  });
});

export const FacilityController = {
  createFacility,
};
