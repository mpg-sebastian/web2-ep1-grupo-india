import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  selectCharacters(){
    const ruta = "";
    return this.http.get(ruta);
  }
}
