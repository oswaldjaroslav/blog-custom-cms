import { Action } from '../types/action.type';
import { Actions } from '../types/actions.enum';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Endpoints } from '../enpoints';
import { ArticleType } from '../types/article.type';


export function getArticles() {
    return function(dispatch: Dispatch<Action<any>>) {
        axios.get(Endpoints.getArticles)
            .then(
                (response: AxiosResponse) => {
                    dispatch({
                        type: Actions.GET_ARTICLES,
                        payload: response.data
                    })
                }
            )
    }
}

export function getCategories() {
    return function(dispatch: Dispatch<Action<any>>) {
        axios.get(Endpoints.getCategories)
            .then(
                (response: AxiosResponse) => {
                    dispatch({
                        type: Actions.GET_CATEGORY,
                        payload: response.data
                    })
                }
            )
    }
}

export function createArticle(article: ArticleType) {
    return function(dispatch: Dispatch<Action<ArticleType>>) {
        axios.post(Endpoints.getArticles, article)
            .then(
                (response: AxiosResponse) => {
                    dispatch({
                       type: Actions.CREATE_ARTICLE,
                       payload: response.data 
                    })
                }
            )
    }
}
