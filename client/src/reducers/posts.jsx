import Posts from "../components/Posts/Posts";

const reducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return state;
        case 'CREATE':
            return [...Posts,action.payload];
        default:
            return Posts;
    }
}