import { Router } from "express";
import {
  createUser,
  deleteMyProfile,
  deleteSpecificUser,
  forgotPassword,
  loginUser,
  myProfile,
  readAllUser,
  readSpecificUser,
  resetPassword,
  updateMyProfile,
  updatePassword,
  updateSpecificUser,
  verifyEmail,
} from "../controller/userController.js";

import authorized from "../middleware/authorized.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import validation from "../middleware/validation.js";
import userValidation from "../validation/userValidation.js";


let userRouter = Router();

userRouter
  .route("/")
  .post(validation(userValidation), createUser)
  .get(isAuthenticated, authorized(["admin", "superadmin"]), readAllUser);

userRouter.route("/login").post(loginUser);

userRouter.route("/verify-email").patch(isAuthenticated, verifyEmail);

userRouter.route("/update-password").patch(isAuthenticated, updatePassword);

userRouter.route("/forgot-password").post(forgotPassword);

userRouter.route("/reset-password").patch(isAuthenticated, resetPassword);

userRouter
  .route("/myprofile")
  .get(isAuthenticated, myProfile)
  .patch(isAuthenticated, updateMyProfile)
  .delete(isAuthenticated, deleteMyProfile);

userRouter
  .route("/:id")
  .get(isAuthenticated, authorized(["admin", "superadmin"]), readSpecificUser)
  .patch(
    isAuthenticated,
    authorized(["admin", "superadmin"]),
    updateSpecificUser
  )
  .delete(isAuthenticated, authorized(["superadmin"]), deleteSpecificUser);

export default userRouter;
