import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Garagem } from './garagem';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GaragemService {

  url = `${environment.urlApi}/garagem`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Garagem[]> {
    return this.http.get<Garagem[]>(`${this.url}`);
  }

  findById(id: number): Observable<Garagem> {
    return this.http.get<Garagem>(`${this.url}/${id}`);
  }

  save(garagem: Garagem): Observable<Garagem> {
    if(garagem.id){
      return this.http.put<Garagem>(`${this.url}`, JSON.stringify(garagem), httpOptions);
    } else {
      return this.http.post<Garagem>(`${this.url}`, JSON.stringify(garagem), httpOptions);
    }
  }

  deteleById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}