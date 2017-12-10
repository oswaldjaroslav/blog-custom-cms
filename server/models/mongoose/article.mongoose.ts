import { Document, Schema, Model, model } from 'mongoose';
import { Category } from '../enums/category.enum';

export interface ArticleInterface {
    title?: string;
    category?: Category;
    date?: Date;
    author?: string;
    comments?: Array<string>;
    message?: string;
}

export interface ArticleModel extends ArticleInterface, Document {

}

export let ArticleSchema: Schema = new Schema({
    title: String,
    catergoty: String,
    date: {
        type: Date,
        default: new Date()
    },
    author: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    message: String
})

export const Article: Model<ArticleModel> = model<ArticleModel>('Article', ArticleSchema);