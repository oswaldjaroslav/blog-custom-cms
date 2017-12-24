import { CategoryType } from '../types/category.type';
import { Action } from '../types/action.type';
import { Actions } from '../types/actions.enum';

export default (state: Array<CategoryType> = [], action: Action<any>) => {
    switch (action.type) {
        case Actions.GET_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}