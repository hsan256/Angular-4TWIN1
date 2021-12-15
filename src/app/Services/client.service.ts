import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseURL = "https://gestionmagasin.herokuapp.com";
 
  constructor(private _http:HttpClient) { }

getAllClients():Observable<Client[]> { 
  return this._http.get<Client[]>(this.baseURL+"/getAllClients");
  }

deleteClient (client: Client): Observable<Client> {
  return this._http.delete<Client>(this.baseURL+"/deleteClient"+'/'+ client.idClient);
  }  

addClient (client: Client): Observable<Client> {
  return this._http.post<Client>(this.baseURL+"/addClient",client);
  }  

updateClient(client: Client): Observable<Client>{
    return this._http.put<Client>(this.baseURL+"/updateClient",client);
  }  

getClientById(idClient: number): Observable<Client> {
  return this._http.get<Client>(this.baseURL+"/getClient" +'/'+ idClient); }
  
}