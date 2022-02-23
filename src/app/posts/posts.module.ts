import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsRoutingModule } from "./posts-routing.module";

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        EditPostComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PostsRoutingModule
    ]
})
export class PostsModule { }