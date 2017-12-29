import { Action } from '../types/action.type';
import { Actions } from '../types/actions.enum';
import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Endpoints } from '../enpoints';

export function login(user: {email: string, password: string}) {
  return function(dispatch: Dispatch<Action<any>>) {
    axios.post(Endpoints.login, user)
      .then(
        (response: AxiosResponse) => {
          localStorage.setItem('token', response.data.token);
          dispatch({
            type: Actions.LOGIN,
            payload: true
          })
        }
      )
  }
}