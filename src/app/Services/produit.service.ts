import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  list: Produit[];
  private baseURL="http://localhost:8081/SpringMVC/servlet/produit";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http: HttpClient) {}

  getAllProductsFormDb(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL+'/retrieve-all-produits');
  }
  addProduct (product: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.baseURL+'/add-produit', product, this.httpOptions);
  }
}
