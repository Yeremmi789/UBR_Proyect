import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/auth/services/roles.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  media = [
    {
      imagen: 'assets/img/portada_3.jpg',
      // titulo: 'Unidad Básica de Rehabilitación (UBR)'
      // titulo: 'Unidad Básica de Rehabilitación (UBR)',
      // desc: 'La calidad nunca es un accidente. Siempre es el resultado de un esfuerzo inteligente.',
      // autor:'-John Ruskin',
    },
    {
      imagen: 'assets/img/portada_4.jpg',
      // titulo: 'Unidad Básica de Rehabilitación (UBR)',
      // desc: 'La buena hospitalidad es sencilla; consiste en un poco de fuego, algo de comida, y mucha quietud.',
      // autor:'-Ralph Waldo Emerson',
    },
    {
      imagen: 'assets/img/portada_1.jpg',
      // titulo: 'Unidad Básica de Rehabilitación (UBR)',
      // desc: 'Si hay esperanza, hay fe, y si hay fe, tenemos ese motor que nos mueve para seguir adelante',
      // autor:'-Valentina Jude',
    }
  ];
  // transicion_ims = 500;
  transicion_ims = 3000;

  Rol: any;
  constructor(private rolesService:RolesService,
              
    ){}


  ngOnInit() {
    // this.rolesService.ObtenerMisRoles()
    //   .subscribe(cont => {
    //     console.log(cont);
    //     this.Rol = cont;
    //   });
  }
}
