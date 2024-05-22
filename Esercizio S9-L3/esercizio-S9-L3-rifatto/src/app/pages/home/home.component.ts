import { Component } from '@angular/core';
import { iJsonContent } from '../../Models/i-json-content';
import { iPost } from '../../Models/i-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  apiArticle = '../../../assets/db.json'
  ArticleArr:iPost[] = []
  firstArticle!:iPost
  randomArticle:iPost[] = []
  ngOnInit(){
    this.getArticles().then(() => {
      let firstArticle = this.getfirstArticle();

      if(firstArticle) {
        this.firstArticle = firstArticle;
      }
      this.randomArticle = this.getRandomArticles();
      console.log(this.randomArticle)
    })
  }
  async getArticles():Promise<void>{
    let response = await fetch(this.apiArticle)
    let allobj = <iJsonContent> await response.json()
    console.log(allobj)
    this.ArticleArr = allobj.posts;
    console.log(this.ArticleArr)
  }

  getfirstArticle(){
    return this.ArticleArr.shift()
  }
  getRandomArticles(){
    let shuffle = (array: iPost[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return shuffle([...this.ArticleArr].slice(0,4))
}
}
