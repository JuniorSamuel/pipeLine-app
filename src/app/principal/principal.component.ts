import { Component, OnInit } from '@angular/core';
import { FiltroPipe } from '../pipe/filtro.pipe';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

export interface datos {
  codigo: string;
  Asignatura: string;
  credito: number;
  cuatrimestre: number
}

const ELEMENT_DATA: datos[] = [
 {codigo: 'TI-101', Asignatura: 'Fundamentos del computador', credito: 4, cuatrimestre: 1},
 {codigo: 'TDS-001', Asignatura: 'Introducción a la elaboración de Algoritmos', credito: 4, cuatrimestre: 1},
 {codigo: 'HIS-101', Asignatura: 'Historia Universal', credito: 3, cuatrimestre: 1},
 {codigo: 'ESP-101', Asignatura: 'Redacción Castellana', credito: 4, cuatrimestre: 1},
 {codigo: 'MAT-001', Asignatura: 'Pre-cálculo', credito: 5, cuatrimestre: 1},
 {codigo: 'OAI-001', Asignatura: 'Orientación Institucional', credito: 1, cuatrimestre: 1},
 {codigo: 'CBG-110', Asignatura: 'Fundamentos del computador', credito: 3, cuatrimestre: 1},
 {codigo: 'ING-001', Asignatura: 'Ingles Nivel 1-3', credito: 0, cuatrimestre: 1},
];

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  form =  this.formBuilder.group({
    cuatrimestre: ['']
  });

  buscar: string = '';
  asignaturaAll:datos[]; 
  asignatura:datos[];
  seleccionado:any[] =[];

  indice: number = 4

  eliminado: number[] = []
  constructor( private formBuilder: FormBuilder,) { 
    this.asignatura = ELEMENT_DATA;
    this.asignaturaAll = ELEMENT_DATA;
  }

  ngOnInit(): void {
    this.form.controls['cuatrimestre'].setValue('1');
  }

  agregar(i: number): void{
    this.seleccionado.push(this.asignatura[i]);
    this.asignatura.splice(i,1);
    this.buscar ='agregado'
    this.buscar =''
  }

  quitar(i: number): void {
    this.asignatura.push(this.seleccionado[i]);
    this.seleccionado.splice(i,1);
  }


  categoria(): void{
    let id = this.form.value.cuatrimestre;
    if( id != 0){
      console.log('ok')
      this.asignatura = this.asignatura.filter( x => {
        return x.cuatrimestre == id;
      })
    }else{
      this.asignatura = this.asignaturaAll
    }
  }
}
