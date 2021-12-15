import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailFacture } from '../Models/detail-facture';

@Injectable({
  providedIn: 'root'
})

export class DetailfactureService {
  private baseURL = "https://gestionmagasin.herokuapp.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  getAllDetailFactures(): Observable<DetailFacture[]>{
    return this.http.get<DetailFacture[]>(this.baseURL+'/detailfacture/retrieve-all-detailfactures',this.httpOptions)
  }
  getDetailFactureById(id:number): Observable<DetailFacture>{
    return this.http.get<DetailFacture>(this.baseURL+'/detailfacture/retrieve-detailfacture/'+id,this.httpOptions)
  }

  addDetailFacture(detailfacture : DetailFacture): Observable<DetailFacture>{
    return this.http.post<DetailFacture>(this.baseURL+'/detailfacture/add-detailfacture',detailfacture,this.httpOptions)
  }
  updatedetailfacture(detailfacture : DetailFacture): Observable<DetailFacture>{
    return this.http.put<DetailFacture>(this.baseURL+'/detailfacture/modify-detailfacture',detailfacture,this.httpOptions)
  }

  deleteDetailFactureById(id:number){
    return this.http.delete(this.baseURL+'/detailfacture/remove-detailfacture/'+id,this.httpOptions)
  }
  
  getDetailFactureByFactureId(id:number): Observable<DetailFacture[]>{
    return this.http.get<DetailFacture[]>(this.baseURL+'/detailfacture/retrieve-detailfactureByFactureId/'+id,this.httpOptions)
  }
  


}
