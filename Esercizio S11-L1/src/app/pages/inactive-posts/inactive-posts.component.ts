import { Component } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { iPost } from '../../Models/i-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  inactivePostArr:iPost[] = [];
  constructor(
    private postsSvc:PostsService
  ){}

   ngOnInit() {
      this.inactivePostArr = this.postsSvc.getInactiveArticles();
  }
}
