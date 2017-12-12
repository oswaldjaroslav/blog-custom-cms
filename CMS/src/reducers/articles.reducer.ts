import { ArticleType } from "../types/article.type";
import { Action } from "../types/action.type";
import { Actions } from '../types/actions.enum';

export default function(state: Array<ArticleType> = [], action: Action<any>) {
    switch (action.type) {

        default:
            return state;
    }
}