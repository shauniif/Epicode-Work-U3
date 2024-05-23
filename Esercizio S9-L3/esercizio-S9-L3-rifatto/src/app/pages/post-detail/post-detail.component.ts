import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../Services/posts.service';
import { iPost } from '../../Models/i-post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  selectedPost!:iPost

  constructor(
    private route:ActivatedRoute,
    private postsSvc:PostsService
  ){}
  ngOnInit(){
    this.route.params.subscribe((params:any) => {

      console.log(params);

      let idSPost = this.postsSvc.getById(params.id)

      console.log(idSPost);

      if(idSPost) {
        this.selectedPost = idSPost
      }
    })
    }
  }

