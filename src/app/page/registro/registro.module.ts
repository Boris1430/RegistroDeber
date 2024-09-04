import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ModalcalificacionesComponent } from './modalcalificaciones/modalcalificaciones.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { RepresentanteComponent } from './representante/representante.component';


@NgModule({
  declarations: [
    CalificacionesComponent,
    ModalcalificacionesComponent,
    EstudiantesComponent,
    RepresentanteComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
