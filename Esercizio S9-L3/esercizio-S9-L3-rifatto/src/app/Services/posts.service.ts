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
    try {
      let response = await fetch(this.apiArticle)
      let allobj = <iJsonContent> await response.json()
      this.ArticleArr = allobj.posts;
    } catch (error) {
      console.log('Errore del caricamento dei posto', error)
    }


  }
  getActiveArticles():iPost[]{
    return this.ArticleArr.filter(spost => spost.active)
  }
  getInactiveArticles():iPost[]{
    return this.ArticleArr.filter(spost => !spost.active)
  }
  getById(id:number){
  return this.ArticleArr.find(spost => spost.id == id)
  }
}
