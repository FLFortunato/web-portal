import { Post } from "../../models/post.model";
import { PostService } from "../../services/posts.service";
import { CREATE_POST, DELETE_POST, GET_ALL_POSTS, UPDATE_POST } from "./types";

export const getAllPosts = () => {
  return async (dispatch: Function) => {
    try {
      const result = await PostService().get();

      const posts = result?.data;

      dispatch({ type: GET_ALL_POSTS, posts });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createPost = (data: Post) => {
  return async (dispatch: Function) => {
    try {
      const create = await PostService().create(data);

      dispatch({ type: CREATE_POST });
    } catch (error) {}
  };
};

export const deletePost = (id: string) => {
  return async (dispatch: Function) => {
    try {
      await PostService().remove(id);
      dispatch({ type: DELETE_POST });
    } catch (error) {
      console.error(error);
    }
  };
};

export const editPost = (data?: Post) => {
  return async (dispatch: Function) => {
    try {
      await PostService().update(data?.id, data);
      dispatch({ type: UPDATE_POST });
    } catch (error) {}
  };
};
