import { Router } from "express";

import { CreateUserController } from "../../controllers/CreateUserController ";
import { DeleteUserController } from "../../controllers/DeleteUserController";
import { ListUsersController } from "../../controllers/ListUsersController";
import { ShowUserController } from "../../controllers/ShowUserController";
import { UpdateUserController } from "../../controllers/UpdateUserController";

const usersRoutes = Router();
const listUsersController = new ListUsersController();
const showUserController = new ShowUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes
  .get("/", listUsersController.handle)
  .get("/:id", showUserController.handle)
  .post("/", createUserController.handle)
  .put("/:id", updateUserController.handle)
  .delete("/:id", deleteUserController.handle);

export { usersRoutes };
