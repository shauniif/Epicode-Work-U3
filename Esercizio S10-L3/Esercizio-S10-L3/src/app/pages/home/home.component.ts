import { Component, OnInit } from '@angular/core';
import { iProduct } from '../../Modules/i-product';
import { ProductService } from '../../services/product.service';
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
    this.productsvc.getAll().subscribe(products => {
      this.jsoncontent = products;
      this.productsArr = this.jsoncontent.products
    console.log(this.productsArr);

    })
  }
}
