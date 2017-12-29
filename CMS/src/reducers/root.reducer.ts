import { combineReducers, Reducer } from 'redux';
import articleReducer from './articles.reducer';
import categoryReducer from './category.reducer';
import authReducer, { AuthState } from './auth.reducer';
import { ArticleType } from '../types/article.type';
import { reducer as formReducer, FormReducer } from 'redux-form';
import { CategoryType } from '../types/category.type';

export interface RootReducer {
    articles: Array<ArticleType>;
    categories: Array<CategoryType>;
    auth: AuthState;
    form: FormReducer;
}

export const rootReducer: Reducer<RootReducer> = combineReducers({
    articles: articleReducer,
    categories: categoryReducer,
    auth: authReducer,
    form: formReducer
});