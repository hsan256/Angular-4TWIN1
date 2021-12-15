import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  list: Stock[];
  private baseURL = "https://gestionmagasin.herokuapp.com/stock";
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseURL + '/retrieve-all-stocks');
  }
  addStock(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(this.baseURL + '/add-stock', stock, this.httpOptions);
  }
  deleteStock(stock: Stock): Observable<any> {
    return this.http.delete<Stock>(this.baseURL + '/remove-stock/'+ stock.idStock);
  }
  editStock(stock: Stock): Observable<any> {
    return this.http.put<Stock>(this.baseURL + '/modify-stock', stock, this.httpOptions);
  }
}
