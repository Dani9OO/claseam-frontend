import { BrowserModule } from '@angular/platform-browser';
import { NgModule, COMPILER_OPTIONS } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HorarioComponent } from './horario/horario.component';
import { ActividadComponent } from './actividad/actividad.component';
import { MateriaComponent } from './materia/materia.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { PushNotificationService} from './_services/push-notification.service';
import { HttpClientModule } from '@angular/common/http';
import { IniciarCuatrimestreComponent } from './iniciar-cuatrimestre/iniciar-cuatrimestre.component';
import { MenuAlumnosComponent } from './menu-alumnos/menu-alumnos.component';
import { SubirActividadComponent } from './subir-actividad/subir-actividad.component';
import { AvisosComponent } from './avisos/avisos.component';
import { IngresarGrupoComponent } from './ingresar-grupo/ingresar-grupo.component';
import { AsignarActividadComponent } from './asignar-actividad/asignar-actividad.component';
import { ConsultarAlumnosComponent } from './consultar-alumnos/consultar-alumnos.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { ConsultarGrupoComponent } from './consultar-grupo/consultar-grupo.component';
import { ConsultarActividadesComponent } from './consultar-actividades/consultar-actividades.component';
import { ConsultarMateriasComponent } from './consultar-materias/consultar-materias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    RegistroComponent,
    BienvenidoComponent,
    IniciarsesionComponent,
    GrupoComponent,
    HorarioComponent,
    ActividadComponent,
    MateriaComponent,
    IniciarCuatrimestreComponent,
    MenuAlumnosComponent,
    SubirActividadComponent,
    AvisosComponent,
    IngresarGrupoComponent,
    AsignarActividadComponent,
    ConsultarAlumnosComponent,
    EditarAlumnoComponent,
    ConsultarGrupoComponent,
    ConsultarActividadesComponent,
    ConsultarMateriasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSortModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [IniciarsesionComponent, RegistroComponent, GrupoComponent,
     IniciarCuatrimestreComponent,MateriaComponent, ActividadComponent, HorarioComponent
    ,SubirActividadComponent, IngresarGrupoComponent, AsignarActividadComponent, AvisosComponent,
   EditarAlumnoComponent],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
