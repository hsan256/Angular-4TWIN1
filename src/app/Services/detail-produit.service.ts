import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailProduit } from '../Models/detail-produit';

@Injectable({
  providedIn: 'root'
})

export class DetailProduitService {
  listDetailProduit :DetailProduit[];
  private baseURL = 'https://gestionmagasin.herokuapp.com/detailproduit';
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
  getDetailProductByIdProduit(id: number): Observable<DetailProduit> {
    return this.http.get<DetailProduit>(this.baseURL + '/retrieve-detailproduitByidProduit/' + id);
  }
  getDetailProductById(id: number): Observable<DetailProduit> {
    return this.http.get<DetailProduit>(this.baseURL + '/retrieve-detailproduit/' + id);
  }
  updateDetailProduct(id: number, detailproduct: DetailProduit): Observable<DetailProduit> {
    return this.http.put<DetailProduit>(
      this.baseURL + '/modify-detailproduit',
      detailproduct,
      this.httpOptions
    );
  }
  deleteDetailProduct(detailProduit: DetailProduit | number): Observable<DetailProduit> {
    const id = typeof detailProduit === 'number' ? detailProduit : detailProduit.idDetailProduit;
    const url = this.baseURL + '/remove-detailproduit/' + id;
    return this.http.delete<DetailProduit>(url);
  }

}
