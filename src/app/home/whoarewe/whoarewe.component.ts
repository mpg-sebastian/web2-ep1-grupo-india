import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from '../../entites/users';

@Component({
  selector: 'app-whoarewe',
  templateUrl: './whoarewe.component.html',
  styleUrls: ['./whoarewe.component.css']
})
export class WhoareweComponent implements OnInit {
  listaUsuarios: usuarios[] | undefined;
  constructor(private UsuariosService: UsuariosService) {}  
  

  ngOnInit(): void {
    this.UsuariosService.selectUsuarios().subscribe(

      (res)=>{
        console.log(res)
        this.listaUsuarios = JSON.parse(JSON.stringify(res));});

    
  }

}
