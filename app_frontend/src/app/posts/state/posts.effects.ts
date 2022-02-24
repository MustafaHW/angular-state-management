import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { PostsService } from "src/app/services/posts.service";
import { AppState } from "src/app/store/app.state";
import { loadPosts, loadPostsSuccess } from "./posts.actions";

@Injectable()
export class PostsEffects {
    constructor(
        private actions$: Actions,
        private postsService: PostsService,
        private store: Store<AppState>
    ) { }

    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadPosts),
            mergeMap((action) => {
                return this.postsService.getPosts().pipe(
                    map((posts) => {
                        console.log(posts)
                        return loadPostsSuccess({ posts });
                    })
                )
            })
        )
    });
}