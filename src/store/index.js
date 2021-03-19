import { combineReducers, createStore } from 'redux';
import homeReducer from './home/reducers';
import drawerReducer from './drawer/reducers';

const rootReducer = combineReducers({
    home: homeReducer,
    drawer: drawerReducer
})

export default createStore(rootReducer);