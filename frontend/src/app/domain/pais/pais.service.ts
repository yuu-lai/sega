import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // Endereço da API
  url = `${environment.urlApi}/pais`; 

  constructor(private http: HttpClient) { }

  // Método para buscar todos
  findAll(): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}`);
  }

  // Método para buscar por ID
  findById(id: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.url}/${id}`);
  }

  // Método para salvar
  save(pais: Pais): Observable<Pais> {
    if(pais.id){
      return this.http.put<Pais>(`${this.url}`, JSON.stringify(pais), httpOptions);
    } else {
      return this.http.post<Pais>(`${this.url}`, JSON.stringify(pais), httpOptions);
    }
  }

  // Método para deletar por ID
  deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

}
