import { TOGGLE_FILTER } from "../Actions/Type";

const filterReducer = (state = null, action) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return action.plyload;
        default:
            return state;
    }
};
export default filterReducer;