import {BaseController} from './Base.controller'
import {createConnection} from 'typeorm'
import {Comment} from '../models/Comment.model'

export class CommentsController extends BaseController {
    static index(req, res): void {
        
    }

    static create(req, res): void {
        // GET - show view for creating comment
    }

    static postCreate(req, res): void {
        // POST - create comment then redirect to read/index
    }

    static read(req, res): void {
        // GET - show comment
    }

    static update(req, res): void {
        // GET - show view for updating comment
    }

    static postUpdate(req, res): void {
        // PATCH - update comment then redirect to read/index
    }

    static delete(req, res): void {
        // DELETE - delete comment then redirect to index
    }
}