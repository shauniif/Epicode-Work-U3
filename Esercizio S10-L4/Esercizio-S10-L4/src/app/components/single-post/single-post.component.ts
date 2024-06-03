import { Component, Input, input } from '@angular/core';
import { iImg } from '../../Modules/i-img';
import { ImageService } from '../../Services/image.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  slike: number = 0;
  @Input() img!: iImg;
  constructor(private imgsvc:ImageService) {}
  likedImg(img:iImg) {
    this.imgsvc.likeImg(img);
    this.slike++
  }

}
