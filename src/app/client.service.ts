import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
  constructor(private _http:HttpClient) { }

getAllClients():Observable<Client[]>{ 
  return this._http.get<Client[]>("http://localhost:8081/SpringMVC/servlet/getAllClients");}
}