import {
    CLEAR_HOME_FORM,
    INPUT_HOME_FORM
} from './types';

const INITIAL_STATE = {
    firstName: '',
    lastName: ''
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_HOME_FORM:
            return { ...state, [action.payload.type]: action.payload.value };
        case CLEAR_HOME_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default reducers;