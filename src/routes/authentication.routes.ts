import {Router, Request, Response} from "express"
import {MembersController} from "../controllers/Members.controller"

const routes = Router()
routes.get("/login", MembersController.startLogin)
routes.post("/login", MembersController.finishLogin)
routes.get("/register", MembersController.startRegister)
routes.post("/register", MembersController.finishRegister)

export default routes