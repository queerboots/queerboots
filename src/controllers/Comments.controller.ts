import {BaseController} from './Base.controller'
import {createConnection} from 'typeorm'
import {Comment} from './models/Comment.model'

export class CommentsController extends BaseController {
    public index(req, res): void {
    }

    public create(req, res): void {
        // GET - show view for creating comment
    }

    public postCreate(req, res): void {
        // POST - create comment then redirect to read/index
    }

    public read(req, res): void {
        // GET - show comment
    }

    public update(req, res): void {
        // GET - show view for updating comment
    }

    public postUpdate(req, res): void {
        // PATCH - update comment then redirect to read/index
    }

    public delete(req, res): void {
        // DELETE - delete comment then redirect to index
    }
}