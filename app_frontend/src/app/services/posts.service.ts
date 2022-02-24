import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsInterface } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(): Observable<PostsInterface[]>{
    return this.httpClient.get<PostsInterface[]>(`${environment.apiUrl}/posts`)
  }
}
