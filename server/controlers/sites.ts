import { Request, Response, NextFunction } from "express";
import { Article, ArticleModel } from '../models/mongoose/article.mongoose';

export class Sites {
    
        public static getIndexPage = (req: Request, res: Response, next: NextFunction) => {
            Article.find({}).then((articles: Array<ArticleModel>) => {
                res.render('index', { articles })
            }).catch(err => next(err))
        }

        public static getAdminPage = (req: Request, res: Response, next: NextFunction) =>
            res.render('admin')
    
    }