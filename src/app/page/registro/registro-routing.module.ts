import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { RepresentanteComponent } from './representante/representante.component';

const routes: Routes = [
  {path: '', redirectTo: 'calificacion', pathMatch: 'full'},
  {path: 'estudiante', component:EstudiantesComponent},
  {path: 'representante', component:RepresentanteComponent},
  {path:'calificacion', component:CalificacionesComponent},
  {path:'**', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
