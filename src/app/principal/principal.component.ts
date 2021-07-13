import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FiltroPipe } from '../pipe/filtro.pipe';

export interface datos {
  codigo: string;
  Asignatura: string;
  credito: number;
}

const ELEMENT_DATA: datos[] = [
 {codigo: 'TI-101', Asignatura: 'Fundamentos del computador', credito: 4},
 {codigo: 'TDS-001', Asignatura: 'Introducción a la elaboración de Algoritmos', credito: 4},
 {codigo: 'HIS-101', Asignatura: 'Historia Universal', credito: 3},
 {codigo: 'ESP-101', Asignatura: 'Redacción Castellana', credito: 4},
 {codigo: 'MAT-001', Asignatura: 'Pre-cálculo', credito: 5},
 {codigo: 'OAI-001', Asignatura: 'Orientación Institucional', credito: 1},
 {codigo: 'CBG-110', Asignatura: 'Fundamentos del computador', credito: 3},
 {codigo: 'ING-001', Asignatura: 'Ingles Nivel 1-3', credito: 0},
];

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  buscar: string = ''
  asignatura:datos[];
  seleccionado:any[] =[];
  constructor() { 
    this.asignatura = ELEMENT_DATA;
  }

  ngOnInit(): void {
  }

  agregar(i: number): void{
    this.seleccionado.push(this.asignatura[i]);
    this.asignatura.splice(i,1);
    this.buscar ='agregado'
    this.buscar =''
  }

  quitar(i: number): void {
    this.asignatura.push(this.seleccionado[i]);
    this.seleccionado.splice(i,1)
  }
}
