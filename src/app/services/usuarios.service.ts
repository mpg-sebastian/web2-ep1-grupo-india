import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  selectUsuarios(){
    const ruta = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(ruta);
  }
}
