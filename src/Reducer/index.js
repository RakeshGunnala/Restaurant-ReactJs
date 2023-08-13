import { combineReducers } from 'redux';
import tablereducer from './tablereducer';
import filterreducer from './filterreducer';
import orderreducer from './orderreducer';
const rootReducer = combineReducers({
    tablereducer: tablereducer,
    filterreducer : filterreducer,
    orderreducer: orderreducer
});

export default rootReducer;
