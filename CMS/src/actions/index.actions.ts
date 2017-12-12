import { Action } from '../types/action.type';
import { Actions } from '../types/actions.enum';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Endpoints } from '../enpoints';


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
