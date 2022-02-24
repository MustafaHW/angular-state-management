import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostsInterface } from 'src/app/models/posts.model';
import { AppState } from '../../store/app.state';
import { deletePost } from '../state/posts.actions';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Observable<PostsInterface[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  onDeletePost(id: number) {
    this.store.dispatch(deletePost({ id }));
  }

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
  }

}
