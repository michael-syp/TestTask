import twitterActionTypes from './actionTypes/twitterActionTypes';

export const setUserAutorised = (name) => {

    return{
        type: twitterActionTypes.SET_AUTHORISED_USER,
        payload: name,
}};

export const sendPost = (text) => {

    return{
        type: twitterActionTypes.SEND_POST,
        payload: text,
}};

export const addComment = (text,postIndex) => {

    return{
        type: twitterActionTypes.SEND_COMMENT,
        payload: {text:text,postIndex:postIndex}
    }};
