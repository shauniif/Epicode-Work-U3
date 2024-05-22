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
    this.randomArray();
  }

  async getArticles():Promise<void>{
    let response = await fetch(this.apiArticle)
    let allobj = <iPost> await response.json()
    console.log(allobj)
    this.ArticleArr = allobj.posts;
    console.log(this.ArticleArr)
  }

  randomArray():void {
    const randomArray: string[] = this.shuffle(this.ArticleArr)
  }

  shuffle = (array: string []) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  };
};

