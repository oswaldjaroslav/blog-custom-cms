import { Category } from "./categories.enum";

export interface ArticleType {
    title?: string;
    category?: Category;
    date?: Date;
    author?: string;
    comments?: Array<string>;
    message?: string;
    _id: any;
}