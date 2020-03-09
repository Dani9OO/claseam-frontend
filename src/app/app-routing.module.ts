import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HorarioComponent } from './horario/horario.component';
import { ActividadComponent } from './actividad/actividad.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'grupo', component: GrupoComponent},
  {path: 'horario', component: HorarioComponent},
  {path: 'actividad', component: ActividadComponent},
  {path: 'menu', component: MenuComponent},
  {path: '', component: BienvenidoComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

