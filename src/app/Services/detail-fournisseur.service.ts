import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailFournisseur } from '../Models/detail-fournisseur';


@Injectable({
  providedIn: 'root'
})
export class DetailFournisseurService {
  private baseUrl = 'https://gestionmagasin.herokuapp.com';  
  constructor(private http:HttpClient) { }
  getAllDetailFournisseur(): Observable<DetailFournisseur[]>{
    
    return this.http.get<DetailFournisseur[]>(this.baseUrl+"/getDetailFournisseur");

  }
  
  createDetailFournisseur(DetailFournisseur: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/addDetailFournisseur', DetailFournisseur);  
  }  
  
  deleteDetailFournisseur(id: number): Observable<any> {  
    return this.http.delete(this.baseUrl+'/remove-DetailFournisseur/'+id);  
  }  
  getDetailFournisseurById(id: number): Observable<DetailFournisseur> {
    const url=this.baseUrl+"/getDetailFournisseur"+'/'+id;
    return this.http.get<DetailFournisseur>(url);
  }
 
  updateDetailFournisseur(four:DetailFournisseur):Observable<DetailFournisseur>{
    return this.http.put<DetailFournisseur>(this.baseUrl+"/modify-DetailFournisseur",four);
  }
  getDetailFournisseur(id: number): Observable<DetailFournisseur> {  
    return this.http.get<DetailFournisseur>(this.baseUrl+'/getDetailFournisseur/'+id);  
  }  

 
}

