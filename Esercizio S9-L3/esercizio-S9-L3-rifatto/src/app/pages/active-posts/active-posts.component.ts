import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
  activePostArr:iPost[] = [];

  constructor(
    private postsSvc:PostsService
  ){}

   ngOnInit() {
      this.activePostArr = this.postsSvc.getActiveArticles();


  }
}
