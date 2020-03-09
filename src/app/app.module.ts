import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
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
  MatOptionModule
} from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HorarioComponent } from './horario/horario.component';
import { ActividadComponent } from './actividad/actividad.component';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule
  ],
  entryComponents: [IniciarsesionComponent, RegistroComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
