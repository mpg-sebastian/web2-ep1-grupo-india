import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  commentsSelect() {
    const api = "https://jsonplaceholder.typicode.com/comments?postId=1"; //5 comments
    return this.http.get(api)
  }
}
