import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduit } from '../Models/detail-produit';

@Injectable({
  providedIn: 'root'
})
export class DetailProduitService {
  listDetailProduit :DetailProduit[];
  private baseURL = 'http://localhost:8081/SpringMVC/servlet/detailproduit';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }

  addDetailProduct(detailproduct: DetailProduit): Observable<DetailProduit> {
    return this.http.post<DetailProduit>(
      this.baseURL + '/add-detailproduit',
      detailproduct,
      this.httpOptions
    );
  }
}