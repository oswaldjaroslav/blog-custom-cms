import { Request, Response, NextFunction } from 'express';
import { Article, ArticleModel, ArticleInterface } from '../models/mongoose/article.mongoose';
import { Category } from '../models/enums/category.enum';

export class API {

    public static createArticle = (req: Request, res: Response, next: NextFunction) => {
        const newArticle: ArticleInterface = req.body;
        if (!Category[newArticle.category]) {
            res.status(412).send({
                error: 'category does not exist'
            })
        } else {
            Article.create(newArticle)
                .then(
                    (value: ArticleModel) =>
                        res.send(value)
                )   
                .catch(err => next(err))
        }
    }

}