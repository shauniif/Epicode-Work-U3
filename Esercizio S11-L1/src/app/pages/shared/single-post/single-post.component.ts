import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPost } from '../../../Models/i-post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  @Input() article!:iPost;
   show:boolean = false
  ShowForm() {
    this.show = !this.show
  }
}
