import { combineReducers, Reducer } from 'redux';
import articleReducer from './articles.reducer';
import { ArticleType } from '../types/article.type';
import { reducer as formReducer, FormReducer } from 'redux-form';

export interface RootReducer {
    articles: Array<ArticleType>;
    form: FormReducer
}

export const rootReducer: Reducer<RootReducer> = combineReducers({
    articles: articleReducer,
    form: formReducer
});