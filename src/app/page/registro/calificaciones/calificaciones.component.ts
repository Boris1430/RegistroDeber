import { Component } from '@angular/core';
import { Calificaciones } from '../../../datasource/calificacion.interface';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html'
})
export class CalificacionesComponent {
  calificacion:Calificaciones[]=[];
  usuario:string='';
  constructor(){
    this.usuario=this.getUsuario().usuario
  }
  getUsuario(){
    let user:any;
    if(localStorage.getItem('usuario')!=null){
      user=localStorage.getItem('usuario');
    }
    return JSON.parse(user);
  }
  guardar(calificacion:Calificaciones){
    calificacion.id=this.calificacion.length;
    this.calificacion.push(calificacion);
  }
  removeCalificacion(index:number){
    console.log(index);
    this.calificacion=this.calificacion.filter(calificacion=>calificacion.id!=index);
  }
}
