// export default (posts = [], action) => {
//     switch(action.type){
//         case 'FETCH_ALL':
//             return action.payloud;
//         case 'REAT':
//             return [...posts,action.payloud];
//         default:
//             return posts;
//     }
// }

const posts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default posts;
