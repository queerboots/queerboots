import {Express}            from 'express'
import {CommentsController} from './controllers/Comments.controller'
import {StaticController}   from './controllers/Static.controller'

export class Router {
    constructor(app: Express) {
        const staticController = new StaticController();

        app.get('/', staticController.index)
    }
}
