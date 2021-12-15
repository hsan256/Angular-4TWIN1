import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../Models/produit';
import { Rayon } from '../Models/rayon';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
  list: Produit[];
  listRayon: Rayon[];

  listStock: Stock[];

  private baseURL = 'https://gestionmagasin.herokuapp.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getAllProductsFormDb(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL + '/produit/retrieve-all-produits');
  }
  addProduct(product: Produit): Observable<Produit> {
    return this.http.post<Produit>(
      this.baseURL + '/produit/add-produit',
      product,
      this.httpOptions
    );
  }
  deleteProduct(product: Produit | number): Observable<Produit> {
    const id = typeof product === 'number' ? product : product.idProduit;
    const url = this.baseURL + '/produit/remove-produit/' + id;
    return this.http.delete<Produit>(url);
  }
  getProductById(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.baseURL + '/produit/retrieve-produit/' + id);
  }
  updateProduct(id: number, product: Produit): Observable<Produit> {
    return this.http.put<Produit>(
      this.baseURL + '/produit/modify-produit',
      product,
      this.httpOptions
    );
  }
  SearchProductByName(name: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseURL + '/produit/retrieve-produitByLibelle/' + name);
  }
  TriProduitASC(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseURL + '/produit/retrieve-produitASC');
  }
  TriProduitDESC(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.baseURL + '/produit/retrieve-produitDESC');
  }
  getAllRayonsFormDb(): Observable<Rayon[]> {
    return this.http.get<Rayon[]>(this.baseURL+'/rayon/retrieve-all-rayons');
  }
  getAllStocksFormDb(): Observable<Stock[]> {
    return this.http.get<Stock[]>(
      this.baseURL+'/stock/retrieve-all-stocks'
    );
  }
}
