import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingComponent } from './components/shared/setting/setting.component';

import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';
import { RegistrosComponent } from './registros/registros.component';
import { ActualizaruserComponent } from './actualizaruser/actualizaruser.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { RegistrarPeliculaComponent } from './registrar-pelicula/registrar-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    routingComponents,
    RegistrosComponent,
    ActualizaruserComponent,
    PerfilComponent,
    PeliculaComponent,
    RegistrarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
