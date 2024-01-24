import { Component, OnInit } from '@angular/core';
import { Comentario } from '../interfaces/Comentario';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    { id: 1, titulo: 'Angular',creador: 'Fernando', fechaCreacion: new Date(), texto: 'Framework para crear SPA'},
    { id: 2, titulo: 'React',creador: 'Miguel', fechaCreacion: new Date(), texto: 'Librerias para crear SPA'}
  ]

  constructor(private _comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioService.getlistComentario().subscribe(data =>{
      this.listComentarios = data
    }, error => {
      console.log(error);
    });
  }

  eliminarComentario(id: any){
    console.log(id);
    this._comentarioService.deleteComentario(id).subscribe(data => {
      this.getComentarios();
    }, error => {
      console.log(error);
    })
  }

}
