import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  postsSelect() {
    const api = "https://jsonplaceholder.typicode.com/posts"; // 100 posts.
    return this.http.get(api);
  }
}
