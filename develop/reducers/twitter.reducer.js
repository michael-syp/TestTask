/**
 * Created by Mike on 5/7/2018.
 */
import sliderActionTypes from './../actions/actionTypes/twitterActionTypes'

const DEFAULT_STATE = {
    name: null,
    post: []
}

const  twitterReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case sliderActionTypes.SET_AUTHORISED_USER:return setAutorisedUserReducer(state, action); break;
        case sliderActionTypes.SEND_POST:return setPostFromUser(state, action); break;
        case sliderActionTypes.SEND_COMMENT:return setCommentFromUser(state, action); break;

        default: return state;
    }
};

const setAutorisedUserReducer =  (state, action) => {

    if(state.name !== action.payload)
        return {...state, name:action.payload}
     else
        return {...state};
};

const setPostFromUser = (state, action) => {

    if(state.name){
        const currentState = {...state};
        currentState.post.push({name:state.name, text: action.payload, comments: []});
        return currentState;
    }
    else
        return {...state};
};

const setCommentFromUser = (state, action) => {

    if(state.name){
        const currentState = {...state};
        currentState.post[action.payload.postIndex].comments.push({name:state.name,text:action.payload.text});
        return currentState;
    }
    else
        return {...state};
};


export default twitterReducer;
