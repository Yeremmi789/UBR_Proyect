import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../pages/terapeutas/Zapatos';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(items: Image[], searchTerm: string, filtro: string, filtroCategoria: string, filtroPrecio: number): Image[] {
    // transform(items: any[], searchTerm: string, filtro: string, filtroSeleccionado: string, filtroPrecio: number): any[] {
    let filteredItems: Image[] = items;

    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      filteredItems = filteredItems.filter(item =>
        // item.titulo.toLowerCase().includes(searchTerm) || 
        // item.categoria.toLowerCase().includes(searchTerm)
        item.tipo.toLowerCase().includes(searchTerm)
      );
    }

    // if (filtro === 'categoria') {
    //   filteredItems = filteredItems.filter(item => item.categoria === filtroCategoria);
    // } else if (filtro === 'precio') {
    //   filteredItems = filteredItems.filter(item => item.precio <= filtroPrecio);
    // }


    if (filtro === 'categoria') {
      if (filtroCategoria === 'Hombre') {
        filteredItems = filteredItems.filter(item => item.categoria === filtroCategoria);
      } else if (filtroCategoria === 'Mujer') {
        filteredItems = filteredItems.filter(item => item.categoria === filtroCategoria);
      }
    } else if (filtro === 'precio') {
      filteredItems = filteredItems.filter(item => item.precio <= filtroPrecio);
    }

    return filteredItems;
  }

}
