import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit{

  // breadcrumbs: { url: string, nombre: string }[];

  constructor(private activatedRoute: ActivatedRoute,
      private bread:BreadcrumbService
    ) {
      
    }

  ngOnInit() {

    this.bread.set('@ChildOne', 'Child One');

    
    // Obtenemos la información de la ruta actual
    // const url = this.activatedRoute.pathFromRoot
    //   .map(route => route.path)
    //   .join('/');
    // const name = this.activatedRoute.snapshot.data.title;

    // Agregamos el breadcrumb correspondiente a la lista de breadcrumbs
    // this.breadcrumbs = [
    //   { url: '/', nombre: 'Inicio' },
    //   { url: url, nombre: name }
    // ];
  }

}
