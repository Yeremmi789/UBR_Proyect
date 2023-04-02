import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    // return null;
    if(arg == '' || arg.length < 3) return value;
    const resultadoPost = [];
    for(const posst of value){
      if(posst.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        console.log("Hola");
        resultadoPost.push(posst);
      }
      else if(posst.apellido_paterno.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        console.log("Hola");
        resultadoPost.push(posst);
      }
      else if(posst.apellido_materno.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        console.log("Hola");
        resultadoPost.push(posst);
      }
      else if(posst.direccion.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        console.log("Hola");
        resultadoPost.push(posst);
      }
      else if(posst.edad===parseInt(arg)){
        resultadoPost.push(posst);
      }
      else if(posst.telefono===parseInt(arg)){
        resultadoPost.push(posst);
      };
    };
    return resultadoPost;
  }

}
