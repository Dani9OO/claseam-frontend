import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuAlumnosComponent } from './menu-alumnos/menu-alumnos.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';
import { ConsultarActividadesComponent } from './consultar-actividades/consultar-actividades.component';
import { ConsultarMateriasComponent } from './consultar-materias/consultar-materias.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'alumnos', component: MenuAlumnosComponent, canActivate: [AuthGuard]},
  {path: 'consultaralumnos', component: ConsultarAlumnosComponent, canActivate: [AuthGuard]},
  {path: 'consultarActividades', component: ConsultarActividadesComponent, canActivate: [AuthGuard]},
  {path: 'consultarMaterias', component: ConsultarMateriasComponent, canActivate: [AuthGuard]},
  {path: '', component: BienvenidoComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

