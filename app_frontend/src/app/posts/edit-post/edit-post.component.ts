import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PostsInterface } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { editPost } from '../state/posts.actions';
import { getPostsById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  id: any;
  post: PostsInterface;
  postsForm: FormGroup;
  postSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  onEditPost() {
    if (!this.postsForm.valid) {
      return;
    }

    const post: PostsInterface = {
      id: this.post.id,
      title: this.postsForm.value.title,
      description: this.postsForm.value.description,
    }
    this.store.dispatch(editPost({ post }));
    this.router.navigate(['posts']);
  }

  createForm() {
    this.postsForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(12)]),
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      console.log(id);
      this.postSubscription = this.store.select(getPostsById(id)).subscribe((data) => {
        this.post = data;
        console.log('edit post data ', this.post);
        this.createForm();
      })
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
