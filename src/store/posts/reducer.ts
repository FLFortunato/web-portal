import {
  CREATE_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  postsState,
  UPDATE_POST,
} from "./types";

const initialState: postsState = {
  posts: [],
};

const PostReducer = (state = initialState, action: any) => {
  const { type, posts } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts };
    case CREATE_POST:
      return state;
    case DELETE_POST:
      return state;
    case UPDATE_POST:
      return state;
    default:
      return state;
  }
};

export default PostReducer;
