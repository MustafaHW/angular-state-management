import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PostsInterface } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postsForm: FormGroup;

  constructor(
    private store: Store<AppState>
  ) { }

  onAddPost() {
    if (!this.postsForm.valid) {
      return;
    }
    console.log('postsForm ', this.postsForm);
    const post: PostsInterface = {
      title: this.postsForm.value.title,
      description: this.postsForm.value.description,
    }
    this.store.dispatch(addPost({ post }))
    console.log('post ', post);
  }

  ngOnInit(): void {
    this.postsForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(12)]),
    })
  }

}
