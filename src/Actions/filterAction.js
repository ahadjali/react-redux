import { TOGGLE_FILTER } from './Type'

export const toogleFilter = (filter) => {
    return {
        type: TOGGLE_FILTER,
        payload: filter
    };
};