import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, editPost, loadPostsSuccess } from "./posts.actions";
import { initialState } from "./posts.state";

const _postsReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post };

        post.id = state.posts.length + 1;

        return {
            ...state,
            posts: [...state.posts, post],
        };
    }),
    on(editPost, (state, action) => {
        let edittedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });

        return {
            ...state,
            posts: edittedPost,
        };
    }),
    on(deletePost, (state, action) => {
        let updatedPosts = state.posts.filter((post)=>{
            return post.id !== action.id;
        });
        return{
            ...state,
            posts: updatedPosts
        };
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.posts
        }
    }));

export function postsReducer(state, action) {
    return _postsReducer(state, action);
}