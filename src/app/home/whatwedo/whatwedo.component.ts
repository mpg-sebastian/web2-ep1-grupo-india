import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from '../../entites/users';
@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent implements OnInit {
  listaUsuarios: usuarios[] | undefined;
  constructor(private UsuariosService: UsuariosService) {}  
  

  ngOnInit(): void {
    this.UsuariosService.selectUsuarios().subscribe(
      (res)=>{this.listaUsuarios = JSON.parse(JSON.stringify(res));});

    
  }

}
