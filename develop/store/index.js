/**
 * Created by Mike on 5/7/2018.
 */
import { applyMiddleware ,createStore } from 'redux'
import reducers from './../reducers'
import thunkMiddleware from 'redux-thunk';

export default createStore(reducers,applyMiddleware(thunkMiddleware));