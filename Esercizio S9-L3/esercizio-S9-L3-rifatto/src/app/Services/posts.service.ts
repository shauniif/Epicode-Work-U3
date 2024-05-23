import { Injectable } from '@angular/core';
import { iJsonContent } from '../Models/i-json-content';
import { iPost } from '../Models/i-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiArticle:string = '../../../assets/db.json'
  ArticleArr:iPost[] = []

  constructor() {
    this.getArticles()
  }


  async getArticles():Promise<void>{
    let response = await fetch(this.apiArticle)
    let allobj = <iJsonContent> await response.json()
    this.ArticleArr = allobj.posts;
  }
  getActiveArticles():iPost[]{
    return this.ArticleArr.filter(spost => spost.active === true)
  }
  getInactiveArticles():iPost[]{
    return this.ArticleArr.filter(spost => spost.active === false)
  }
  getById(id:number){
  return this.ArticleArr.find(spost => spost.id == id)
  }
}
