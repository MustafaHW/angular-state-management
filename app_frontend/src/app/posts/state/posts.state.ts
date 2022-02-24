import { PostsInterface } from "src/app/models/posts.model"

export interface PostsState{
    posts: PostsInterface[]
}

export const initialState: PostsState = {
    posts: []
}
