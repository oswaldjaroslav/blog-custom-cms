import { Request, Response, NextFunction } from 'express';
import { Article, ArticleModel, ArticleInterface } from '../models/mongoose/article.mongoose';
import { Category, CategoryInterface } from '../models/mongoose/category.mongoose';

export class API {

    public static createArticle = (req: Request, res: Response, next: NextFunction) => {
        const newArticle: ArticleInterface = req.body;
        Article.create(newArticle)
            .then(
                (value: ArticleModel) => {
                    Category.findById(value.category)
                        .then((category: CategoryInterface) => {
                            value.category = category;
                            res.send(value)
                        })
                        .catch(err => next(err))
                }
            )   
            .catch(err => next(err))
    }

    public static getArticles = (req: Request, res: Response, next: NextFunction) => {
        Article.find({}).populate('category')
            .then(
                (articles: Array<ArticleInterface>) => {
                    res.send(articles);
                }
            )
            .catch(err => next(err))
    }

    public static createCategorie = (req: Request, res: Response, next: NextFunction) => {
        const newCategory: CategoryInterface = req.body;
        Category.create(newCategory)
            .then(
                (value: CategoryInterface) => {
                    res.send(value);
                }
            )
            .catch(err => next(err));
    }

    public static getCategories = (req: Request, res: Response, next: NextFunction) => {
        Category.find({})
            .then(
                (categories: Array<CategoryInterface>) => {
                    res.send(categories);
                }
            )
            .catch(err => next(err));
    }

}