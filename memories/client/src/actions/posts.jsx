import { FETCH_ALL,FETCH_POST,FETCH_BY_SEARCH,START_LOADING,END_LOADING,CREATE,UPDATE,DELETE,LIKE,COMMENT } from '../constants/actionType';
import * as api from '../api';


export const getPost = (id) => async(dispatch) => {

    // const action = {}
    
    try {
        dispatch({type:START_LOADING});
        const { data } = await api.fetchPost(id);

        console.log(data);

        dispatch({type: FETCH_POST, payload: data})
        dispatch({type:END_LOADING});
    } catch (error) {
        console.log(error.message);
        
    }
    // console.log(`inside getposts`);
    // dispatch(action);
}


//Action Creators
export const getPosts = (page) => async(dispatch) => {

    // const action = {}
    
    try {
        dispatch({type:START_LOADING});
        const { data } = await api.fetchPosts(page);
        
        // console.log(data);

        dispatch({type: FETCH_ALL, payload: data})
        dispatch({type:END_LOADING});
    } catch (error) {
        console.log(error.message);
        
    }
    // console.log(`inside getposts`);
    // dispatch(action);
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    console.log("action");
    
    try {
        dispatch({type:START_LOADING});
        const{data:{data}} = await api.fetchPostsBySearch(searchQuery);
        console.log("fr-search");
        dispatch({type: FETCH_BY_SEARCH, payload: data})
        console.log(data)
        dispatch({type:END_LOADING});
    } catch (error) {
        console.log(error); 
    }
}

export const createPost = (post,navigate) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
        navigate(`/posts/${data._id}`)
        dispatch(getPosts());

    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({ type: UPDATE, payload:data });
        dispatch(getPosts());

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const response = await api.deletePost(id);
        dispatch({type: DELETE, payload:id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        console.log("like");
        const {data} = await api.likePost(id);
        dispatch({ type: LIKE, payload:data });
    } catch (error) {
        console.log(error);
    }
}


export const commentPost =(value,id) => async (dispatch) =>{
    try {
        const {data} = await api.comment(value,id);
        dispatch({type:COMMENT,payload:data});
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}