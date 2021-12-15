import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Models/client';
import { Facture } from '../Models/facture';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseURL = "https://gestionmagasin.herokuapp.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  getAllFactures(): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/retrieve-all-factures',this.httpOptions)
  }
  getActiveFactures(): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/retrieve-active-factures',this.httpOptions)
  }
  downloadFacture(id : number ): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/pdfreport/'+id,this.httpOptions)
  }
  searchActiveFactures(nom : string): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/recherche-active-factures/'+nom,this.httpOptions)
  }
  searchNonActiveFactures(nom:string): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/recherche-non-active-factures/'+nom,this.httpOptions)
  }
  getNonActiveFactures(): Observable<Facture[]>{
    return this.http.get<Facture[]>(this.baseURL+'/facture/retrieve-not-active-factures',this.httpOptions)
  }
  getFactureById(id:number): Observable<Facture>{
    return this.http.get<Facture>(this.baseURL+'/facture/retrieve-facture/'+id,this.httpOptions)
  }

  addFacture(facture : Facture): Observable<Facture>{
    return this.http.post<Facture>(this.baseURL+'/facture/add-facture',facture,this.httpOptions)
  }
  updateFacture(facture : Facture): Observable<Facture>{
    return this.http.put<Facture>(this.baseURL+'/facture/modify-facture',facture,this.httpOptions)
  }

  deleteFactureById(id:number){
    return this.http.delete(this.baseURL+'/facture/remove-facture/'+id,this.httpOptions)
  }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseURL+'/getAllClients',this.httpOptions);
  }
  getProducts():Observable<Produit[]>{    
    return this.http.get<Produit[]>(this.baseURL+'/produit/retrieve-all-produits',this.httpOptions);
  }

}
