import { createAction, props } from "@ngrx/store";
import { PostsInterface } from "src/app/models/posts.model";

export const Add_Post_Action = 'add post';
export const Edit_Post_Action = 'edit post';
export const Delete_Post_Action = 'delete post';
export const Load_Posts_Action = 'load posts';
export const Load_Posts_Success_Action = 'load posts success';


export const addPost = createAction(Add_Post_Action, props<{ post: PostsInterface }>());
export const editPost = createAction(Edit_Post_Action, props<{ post: PostsInterface }>());
export const deletePost = createAction(Delete_Post_Action, props<{ id: number }>());
export const loadPosts = createAction(Load_Posts_Action);
export const loadPostsSuccess = createAction(Load_Posts_Success_Action, props<{ posts: PostsInterface[] }>());