import { Component } from '@angular/core';
import { iProduct } from '../../Modules/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favoriteArr:iProduct[] = this.productsvc.favoriteproductArr
  constructor(private productsvc:ProductService) {}


  removeFromFavorite(product: iProduct) {
  this.productsvc.removeFromFavorite(product)
    this. favoriteArr = this.productsvc.favoriteproductArr
    console.log(this.favoriteArr)
  }
}
