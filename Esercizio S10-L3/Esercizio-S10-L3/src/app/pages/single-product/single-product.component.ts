import { Component, Input } from '@angular/core';
import { iProduct } from '../../Modules/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  @Input() product!:iProduct;
  constructor(private productsvc:ProductService) {}

  favoriteproduct(product: iProduct) {
    this.productsvc.addToFavorite(product);
  }
}
