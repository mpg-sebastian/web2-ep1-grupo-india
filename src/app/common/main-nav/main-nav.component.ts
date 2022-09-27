import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from '../../entites/users';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  listaUsuarios: usuarios[] | undefined;//almacenamiento de usuarios


  constructor(private UsuariosService: UsuariosService) {}  
  

  ngOnInit(): void {
    this.UsuariosService.selectUsuarios().subscribe(
      (res)=>{this.listaUsuarios = JSON.parse(JSON.stringify(res));});

    
  }
}
