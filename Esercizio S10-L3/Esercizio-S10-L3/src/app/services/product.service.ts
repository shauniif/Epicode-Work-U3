import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProduct } from '../Modules/i-product';
import { iJsonContent } from '../Modules/json-content';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products';
  jsonContent:iJsonContent[] = [];
  constructor(private http:HttpClient) { }

  getAll():Observable<iJsonContent> {
      return this.http.get<iJsonContent>(this.apiUrl);
  }

}
