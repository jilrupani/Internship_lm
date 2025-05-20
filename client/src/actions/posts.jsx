// // import * as api from '../api';

// // export const getPosts =()=>async(dispatch) =>{
// //     try {
// //         const { data } = await api.fetchPosts();
// //         dispatch({type:'FETCH_ALL',payload:data});
// //     } catch (error) {
// //         console.log(error.message);
// //     }
// // }

// // export const createPost = (post) => async (dispatch) => {
// //     try {
// //         const {data} = await api.createPost(post);
// //         dispatch({type:'CREATE', payload: data});
// //     } catch (error) {
// //         console.log(error);
// //     }
// // }

// import * as api from '../api';

// // Action Creators
// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchPosts();
//     dispatch({ type: 'FETCH_ALL', payload: data });
//   } catch (error) {
//     console.error('Error fetching posts:', error.message);
//   }
// };

// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await api.createPost(post);
//     dispatch({ type: 'CREATE', payload: data });
//   } catch (error) {
//     console.error('Error creating post:', error.message);
//   }
// };

import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
