import { Component, Input } from '@angular/core';
import { iProduct } from '../../Modules/i-product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  @Input() product!:iProduct;
}
