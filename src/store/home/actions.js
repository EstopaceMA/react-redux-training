import {
    CLEAR_HOME_FORM,
    INPUT_HOME_FORM
} from './types';

export const inputHomeForm = (type, value) => ({
    type: INPUT_HOME_FORM,
    payload: { type, value }
})

export const clearHomeForm = (type, value) => ({
    type: CLEAR_HOME_FORM,
    payload: { type, value }
})