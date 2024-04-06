
import {combineReducers} from "redux";
import amountReducer from './amountReducer';

// to combine all the reducers
const reducers = combineReducers({
    amount: amountReducer
    // add other reducers if present
})

export default reducers