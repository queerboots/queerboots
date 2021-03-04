import {Router, Request, Response} from "express"
import AuthenticationRoutes from "./authentication.routes"
import {StaticController} from "../controllers/Static.controller"

const routes = Router()

// Redirect routes to other files
routes.use("/auth", AuthenticationRoutes)

// Root routes
routes.get("/", StaticController.index)

export default routes