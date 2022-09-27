import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  selectCharacters(){
    const ruta = "https://jsonplaceholder.typicode.com/posts/1/comments";
    return this.http.get(ruta);
  }
}
