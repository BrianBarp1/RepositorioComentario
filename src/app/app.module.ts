import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


//Componentes
import { AppComponent } from './app.component';
import { ListComentariosComponent } from './list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './agregar-editar-comentario/agregar-editar-comentario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VerComentariosComponent } from './ver-comentarios/ver-comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComentariosComponent,
    AgregarEditarComentarioComponent,
    NavbarComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
