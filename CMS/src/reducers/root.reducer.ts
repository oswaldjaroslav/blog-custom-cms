import { combineReducers, Reducer } from 'redux';
import articleReducer from './articles.reducer';
import { ArticleType } from '../types/article.type';

export interface RootReducer {
    articles: Array<ArticleType>
}

export const rootReducer: Reducer<RootReducer> = combineReducers({
    articles: articleReducer
});