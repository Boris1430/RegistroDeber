import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent {
  
  @ViewChild(NgForm, {static: false}) formDatosEstudiante!: NgForm;

  nombre: string = '';

  guardarDatosComponente(){
    
  }
  guardarEstudiante() {
    this.validar(this.formDatosEstudiante);
  }

  validar(formDatosEstudiante: NgForm){
    if(formDatosEstudiante.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente');
    } else {
      alert('Error en los datos del formulario');
    }
  }
}
