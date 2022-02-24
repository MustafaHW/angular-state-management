import { PostsInterface } from "src/app/models/posts.model"

export interface PostsState{
    posts: PostsInterface[]
}

export const initialState: PostsState = {
    posts: [
        {id: 1, title: '1st Title', description: '1st description'},
        {id: 2, title: '2nd Title', description: '2nd description'},
        {id: 3, title: '3rd Title', description: '3rd description'},
    ]
}
