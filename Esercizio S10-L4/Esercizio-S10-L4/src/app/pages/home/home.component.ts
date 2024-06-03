import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../Services/image.service';
import { iImg } from '../../Modules/i-img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  imgArr: iImg[] = [];
  likedImg: iImg[] = [];
  constructor(private imgsvc:ImageService) {}
ngOnInit() {
  this.imgsvc.getAll().subscribe(img =>{
    this.imgArr = img;
    console.log(this.imgArr);
    this.imgArr = this.imgArr.slice(0, 100)
    console.log(this.imgArr);
  });

  this.imgsvc.like$.subscribe(img =>{
    this.likedImg.push(img);
    console.log(this.likedImg);
  }
  )



  }
}
