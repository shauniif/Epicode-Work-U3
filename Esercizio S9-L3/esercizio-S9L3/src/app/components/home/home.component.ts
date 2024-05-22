import { Component } from '@angular/core';
import { iPost, iArticle } from '../../Models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  apiArticle = '../../../assets/db.json'
  ArticleArr:iArticle[] = []
  ngOnInit(){
    this.getArticles()
  }

  async getArticles():Promise<void>{
    let response = await fetch(this.apiArticle)
    let allobj = <iPost> await response.json()
    console.log(allobj)
    this.ArticleArr = allobj.posts;
    console.log(this.ArticleArr)
  }
}
