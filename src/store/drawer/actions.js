import {
    SET_ACTIVE_FORM,
} from './types';

export const setActiveForm = (type, value) => ({
    type: SET_ACTIVE_FORM,
    payload: { type, value }
})