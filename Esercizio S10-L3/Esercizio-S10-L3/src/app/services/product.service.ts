import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { iProduct } from '../Modules/i-product';
import { iJsonContent } from '../Modules/json-content';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products';
  jsonContent:iJsonContent[] = [];
  favoriteproductArr:iProduct[] =[]
  cartProductArr:iProduct[] =[]
  constructor(private http:HttpClient) { }

  getAll():Observable<iJsonContent> {
      return this.http.get<iJsonContent>(this.apiUrl);
  }
  getProducts(): Observable<iProduct[]> {
    return this.getAll().pipe(
      map((obj: iJsonContent) => obj.products)
    );
  }

  addToFavorite(product: iProduct) {
  this.favoriteproductArr.push(product)
  console.log(this.favoriteproductArr)
  }
  removeFromFavorite(product: iProduct){
    this.favoriteproductArr = this.favoriteproductArr.filter(p => p.id!== product.id)
  }
  addtoCart(product: iProduct) {
    this.cartProductArr.push(product)
    console.log(this.cartProductArr)
  }
  removeFormCart(product: iProduct){
    this.cartProductArr = this.cartProductArr.filter(p => p !== product )
    }
  }

