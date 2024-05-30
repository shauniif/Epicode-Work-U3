import { iImg } from './../Modules/i-img';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  likeSubject = new Subject<iImg>();
  like$ = this.likeSubject.asObservable();



  apiUrl:string="https://jsonplaceholder.typicode.com/photos"
  constructor(private http:HttpClient) { }
  getAll():Observable<iImg[]> {
    return this.http.get<iImg[]> (this.apiUrl);
  }

  likeImg(img:iImg) {
    this.likeSubject.next(img);
  }
}
