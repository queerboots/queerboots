import {BaseController} from './Base.controller'

export class StaticController extends BaseController {
    public index(req, res): void {
        res.render('index')
    }
}