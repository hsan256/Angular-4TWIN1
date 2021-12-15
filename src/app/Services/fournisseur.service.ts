import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../Models/fournisseur';


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private baseUrl = 'https://gestionmagasin.herokuapp.com/';  
  constructor(private http:HttpClient) { }
  getFournisseurList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getFournisseur');  
  }  
  
  createFournisseur(Fournisseur: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'addFournisseur', Fournisseur);  
  }  
  
  deleteFournisseur(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}remove-fournisseur/${id}`, { responseType: 'text' });  
  }  
  
 
  updateFournisseur(four:Fournisseur):Observable<Fournisseur>{
    return this.http.put<Fournisseur>(this.baseUrl+"modify-fournisseur",four);
  }
  getFournisseur(id: number): Observable<Fournisseur> {  
    return this.http.get<Fournisseur>(this.baseUrl+'getFournisseur/'+id);  
  }  
  getFournisseurById(id: number): Observable<Fournisseur> {
    const url=this.baseUrl+"retrieveDetailFournisseur"+'/'+id;
    return this.http.get<Fournisseur>(url);
  }

  Search(name: string): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.baseUrl + 'searchFournisseurs/' + name);
  }
  
  TriFournisseurASC(): Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(this.baseUrl + 'retrieve-fournisseurASC');
  }

  TriFournisseurDESC(): Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(this.baseUrl + 'retrieve-fournisseurDESC');
  }
}
