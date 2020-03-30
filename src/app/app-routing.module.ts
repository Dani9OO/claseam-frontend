import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuAlumnosComponent } from './menu-alumnos/menu-alumnos.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'alumnos', component: MenuAlumnosComponent},
  {path: 'consultaralumnos', component: ConsultarAlumnosComponent},
  {path: '', component: BienvenidoComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

