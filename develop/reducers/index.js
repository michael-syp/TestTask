/**
 * Created by Mike on 5/7/2018.
 */
import { combineReducers } from 'redux'
import twiterReducer from './twitter.reducer'

const rootReducer = combineReducers({
    twitter:twiterReducer,
})

export default rootReducer
