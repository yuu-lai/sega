import { Carro } from './carro';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  url = `${environment.urlApi}/carro`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.url}`);
  }

  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.url}/${id}`);
  }

  save(carro: Carro): Observable<Carro> {
    if (carro.id) {
      return this.http.put<Carro>(`${this.url}`, JSON.stringify(carro), httpOptions);
    } else {
      return this.http.post<Carro>(`${this.url}`, JSON.stringify(carro), httpOptions);
    }
  }

  deteleById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
