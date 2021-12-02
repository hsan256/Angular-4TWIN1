import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rayon } from '../Models/rayon';

// const API_URL = `${environment.BASE_URL}/SpringMVC/servlet/rayon`;

@Injectable({
  providedIn: 'root'
})

export class RayonService {
  list: Rayon[];
  private baseURL = "http://localhost:8081/SpringMVC/servlet/rayon";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getAllRayon(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(this.baseURL + '/retrieve-all-rayons');
  }
  addRayon(rayon: Rayon): Observable<Rayon> {
    return this.http.post<Rayon>(this.baseURL + '/add-rayon', rayon, this.httpOptions);
  }
  deleteRayon(rayon: Rayon): Observable<any> {
    return this.http.delete<Rayon>(this.baseURL + '/remove-rayon/'+ rayon.idRayon);
  }
  editRayon(rayon: Rayon): Observable<any> {
    return this.http.put<Rayon>(this.baseURL + '/modify-rayon', rayon, this.httpOptions);
  }
}
