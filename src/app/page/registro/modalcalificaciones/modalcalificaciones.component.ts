import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificaciones } from '../../../datasource/calificacion.interface';


@Component({
  selector: 'app-modalcalificaciones',
  templateUrl: './modalcalificaciones.component.html'
})
export class ModalcalificacionesComponent {
  @Input()textModal:string='';
  @Output() emiter=new EventEmitter<Calificaciones>();
  @Input() calificacion!: Calificaciones;
  @Input()idCalificacion?:string='nuevo'
  private _formBuilder=inject(FormBuilder);
  form!:FormGroup;
  constructor(){
    this.initForm();
  }
  initForm(){
    this.form=this._formBuilder.group(
      {
        nombre_tarea:['',[Validators.required]],
        descrip_tarea:['',[Validators.required]],
        fecha_inicio:['',[Validators.required]],
        fecha_fin:['',[Validators.required]],
        calificacion:['',[Validators.required]],
        estado:['',[Validators.required]],
      }
    )
  }
  getInvalid(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched;
  }
  guardar(){
    if( this.form.invalid){
      Object.values(this.form.controls).forEach(controls=>controls.markAsTouched());
      return;
    }
    if(this.idCalificacion=='nuevo'){
      this.emitirCalificacion()
    }
  }
  emitirCalificacion(){
    this.emiter.emit(this.calificacion);
  } 
}
