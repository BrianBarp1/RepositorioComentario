import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private myAppUrl = 'https://localhost:7243/'
  private myApiUrl = 'api/comentario/'

  constructor(private http: HttpClient) { }

  getlistComentario(): Observable<any> {
    return this.http.get(this.myApiUrl + this.myApiUrl);
  }

  deleteComentario(id: number): Observable<any>{
    return this.http.delete(this.myApiUrl + this.myApiUrl + id);
  }
}
