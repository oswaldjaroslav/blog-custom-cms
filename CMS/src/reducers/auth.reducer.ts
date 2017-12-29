import { Action } from "../types/action.type";
import { Actions } from '../types/actions.enum';

export class AuthState {
  authenticated: boolean = false;
  errorMessage: string = null;
}

export default function(state: AuthState = new AuthState(), action: Action<any>): AuthState {
  switch (action.type) {
    case Actions.LOGIN:
      return {...state, authenticated: true};
    default:
      return state;
  }
}