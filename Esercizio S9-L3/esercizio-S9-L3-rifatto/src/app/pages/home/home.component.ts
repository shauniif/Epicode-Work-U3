import { Component } from '@angular/core';
import { iJsonContent } from '../../Models/i-json-content';
import { iPost } from '../../Models/i-post';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ArticleArr:iPost[] = []
  firstArticle!:iPost
  randomArticle:iPost[] = []

  constructor(
    private postsSvc:PostsService
  ){}
  ngOnInit(){
      let firstArticle = this.postsSvc.getfirstArticle();

      if(firstArticle) {
        this.firstArticle = firstArticle;
      }
      this.randomArticle = this.postsSvc. getRandomArticles();
      console.log(this.randomArticle)

      this.ArticleArr = this.postsSvc.getAll();
      console.log(this.ArticleArr)
  }
}
