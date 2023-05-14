import { Component } from '@angular/core';
import { Image } from './Zapatos';

@Component({
  selector: 'app-terapeutas',
  templateUrl: './terapeutas.component.html',
  styleUrls: ['./terapeutas.component.css']
})
export class TerapeutasComponent {

  searchTerm: string = '';
  filtroPrecio: number = 1000;
  filtro: string = '';
  filtroSeleccionado: string = '';
  categorias: string[] = ['Hombre', 'Mujer'];
  filtroCategoria:string = '';
  items: Image[] = [
    // items: = [
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 500,
      imagen: 'assets/img/zapato11.png',
      // categoria: "Deportivos"
      categoria: "Hombre",
      tipo: "Deportivos",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 350,
      imagen: 'assets/img/zapato1.jpg',
      categoria: "Hombre",
      tipo: "trabajo",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 620,
      imagen: 'assets/img/zapato2.jpg',
      categoria: "Mujer",
      tipo: "Zapatillas de casa",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 780,
      imagen: 'assets/img/zapato3.jpg',
      categoria: "Mujer",
      tipo: "Danza",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 1200,
      imagen: 'assets/img/zapato4.jpg',
      categoria: "Hombre",
      tipo: "Vestir",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 680,
      imagen: 'assets/img/zapato5.jpg',
      categoria: "Mujer",
      tipo: "Basquet",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 270,
      imagen: 'assets/img/zapato6.jpg',
      categoria: "Hombre",
      tipo: "ciclismo",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 550,
      imagen: 'assets/img/zapato7.jpg',
      categoria: "Mujer",
      tipo: "Salsa",
      
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 710,
      imagen: 'assets/img/zapato8.jpg',
      categoria: "Hombre",
      tipo: "Salsa"
    },
    {
      // titulo: "Dead By Daylight",
      // descripcion: "Dead by Daylight es un videojuego de horror de supervivencia asimétrico en línea en el que cuatro jugadores deben trabajar juntos para escapar de un asesino controlado por un quinto jugador.",
      precio: 330,
      imagen: 'assets/img/zapato9.jpg',
      categoria: "Mujer",
      tipo: "Escolar"
    },

  ];
}
