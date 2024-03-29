import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentariosComponent } from './ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  { path: '', component: ListComentariosComponent},
  { path: 'agregar', component: AgregarEditarComentarioComponent },
  { path: 'editar/:id', component: AgregarEditarComentarioComponent },
  { path: 'ver/:id', component: VerComentariosComponent },
  { path: '**', redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
