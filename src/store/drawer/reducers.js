import {
    SET_ACTIVE_FORM
} from './types';

const INITIAL_STATE = {
    activeForm: 'Home'
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_ACTIVE_FORM:
            return { ...state, [action.payload.type]: action.payload.value };
        default:
            return state;
    }
}

export default reducers;