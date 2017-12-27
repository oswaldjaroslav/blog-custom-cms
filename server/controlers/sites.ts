import { Request, Response, NextFunction } from "express";
import { Article, ArticleModel } from '../models/mongoose/article.mongoose';
import { Category, CategoryInterface } from '../models/mongoose/category.mongoose';

export class Sites {
    
        public static getIndexPage = (req: Request, res: Response, next: NextFunction) => {
            Article.find({}).populate('category').then((articles: Array<ArticleModel>) => {
                Category.find({}).then(
                    (categories: Array<CategoryInterface>) => {
                        res.render('index', { articles, categories })
                    }
                )
            }).catch(err => next(err))
        }

        public static getAdminPage = (req: Request, res: Response, next: NextFunction) =>
            res.render('admin')
    
    }