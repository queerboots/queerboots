import {BaseController} from './Base.controller'

export class StaticController extends BaseController {
    static index(req, res): void {
        res.render('index')
    }
}