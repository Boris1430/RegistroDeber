import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-representante',
  templateUrl: './representante.component.html'
})
export class RepresentanteComponent {
  @ViewChild(NgForm, {static: false}) formDatosRepresentante!: NgForm;

  nombre: string = '';

  guardarDatosComponente(){
    
  }
  guardarRepresentante() {
    this.validar(this.formDatosRepresentante);
  }

  validar(formDatosRepresentante: NgForm){
    if(formDatosRepresentante.valid){
      console.log('Se ha ingresado los datos personales satisfactoriamente');
    } else {
      alert('Error en los datos del formulario');
    }
  }
}
