import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuAlumnosComponent } from './menu-alumnos/menu-alumnos.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';
import { ConsultarGrupoComponent } from './consultar-grupo/consultar-grupo.component';
import { ConsultarActividadesComponent } from './consultar-actividades/consultar-actividades.component';
import { ConsultarMateriasComponent } from './consultar-materias/consultar-materias.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'alumnos', component: MenuAlumnosComponent},
  {path: 'consultaralumnos', component: ConsultarAlumnosComponent},
  {path: 'consultarGrupo', component: ConsultarGrupoComponent},
  {path: 'consultarActividades', component: ConsultarActividadesComponent},
  {path: 'consultarMaterias', component: ConsultarMateriasComponent},
  {path: '', component: BienvenidoComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

