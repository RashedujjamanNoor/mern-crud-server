import express from "express";
import {
  create,
  deleteUser,
  showUsers,
  singleUser,
  updateUser,
} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/users", showUsers);
route.get("/user/:id", singleUser);
route.delete("/user/:id", deleteUser);
route.put("/update/:id", updateUser);

export default route;
