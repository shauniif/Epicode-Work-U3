import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiverandomcolor]'
})
export class DirectiverandomcolorDirective {

  constructor(private ref:ElementRef) { }

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = this.randomBackgroundColor();

  }

  randomBackgroundColor(){
    let redRGB =  Math.floor(Math.random() * 256);
    let blueRGB = Math.floor(Math.random() * 256)
    let greenRGB = Math.floor(Math.random() * 256);
    return (`rgb(${redRGB},${greenRGB},${blueRGB})`);
  }
}
