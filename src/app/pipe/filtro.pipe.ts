import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resul = [];
    for(const elemento of value){
      if (elemento.Asignatura.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resul.push(elemento);
      }
    }
     return resul;
   }
}

