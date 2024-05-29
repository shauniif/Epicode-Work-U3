import { iProduct } from './../../Modules/i-product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { iJsonContent } from '../../Modules/json-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  jsoncontent!:iJsonContent;
  productsArr:iProduct[] = []
  constructor(private productsvc:ProductService) {}

  ngOnInit(){
    this.productsvc.getProducts().subscribe(products => {
      this.productsArr = products;
    });



  }
}
