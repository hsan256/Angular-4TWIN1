import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "https://gestionmagasin.herokuapp.com";
  constructor(private _http:HttpClient) { }

  getAllUsers():Observable<User[]> { 
    return this._http.get<User[]>(this.baseURL+"/getAllUsers");
    }
  
  deleteUser (user: User): Observable<User> {
    return this._http.delete<User>(this.baseURL+"/deleteUser"+'/'+ user.id);
    }  
  
  addUser (user: User): Observable<User> {
    return this._http.post<User>(this.baseURL+"/addUser",user);
    }  
  
  updateUser(user: User): Observable<User>{
      return this._http.put<User>(this.baseURL+"/updateUser",user);
    }  
  
  getUserById(idUser: number): Observable<User> {
    return this._http.get<User>(this.baseURL+"/getUser" +'/'+ idUser); }
}
