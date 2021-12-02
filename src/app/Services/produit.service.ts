import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Models/produit';
import { Rayon } from '../Models/rayon';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  list: Produit[];
  listRayon: Rayon[];

  listStock: Stock[];

  private baseURL = 'http://localhost:8081/SpringMVC/servlet/produit';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAllProductsFormDb(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL + '/retrieve-all-produits');
  }
  addProduct(product: Produit): Observable<Produit> {
    return this.http.post<Produit>(
      this.baseURL + '/add-produit',
      product,
      this.httpOptions
    );
  }
  deleteProduct(product: Produit | number): Observable<Produit> {
    const id = typeof product === 'number' ? product : product.idProduit;
    const url = this.baseURL + '/remove-produit/' + id;
    return this.http.delete<Produit>(url);
  }
  getProductById(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.baseURL + '/retrieve-produit/' + id);
  }
  updateProduct(id: number, product: Produit): Observable<Produit> {
    return this.http.put<Produit>(
      this.baseURL + '/modify-produit',
      product,
      this.httpOptions
    );
  }
  SearchProductByName(name: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL + '/retrieve-produitByLibelle/' + name);
  }
  TriProduitASC(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseURL + '/retrieve-produitASC');
  }
  TriProduitDESC(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseURL + '/retrieve-produitDESC');
  }
  getAllRayonsFormDb(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(
      'http://localhost:8081/SpringMVC/servlet/rayon/retrieve-all-rayons'
    );
  }
  getAllStocksFormDb(): Observable<Stock[]> {
    return this.http.get<Stock[]>(
      'http://localhost:8081/SpringMVC/servlet/stock/retrieve-all-stocks'
    );
  }
}
