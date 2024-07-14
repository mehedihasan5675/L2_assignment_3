import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

// Below you can see the application of catchAsync function.
const userSignUp = catchAsync(async (req, res) => {
  const studentData = req.body;
  const result = await UserServices.createUserIntoDB(studentData);

  // Below you can see the use of custom sendResponse function to make the code base clean.
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered succesfully",
    data: result,
  });
});

export const UserController = {
  userSignUp,
};
