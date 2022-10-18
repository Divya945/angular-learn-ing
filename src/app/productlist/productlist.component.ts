import { Component } from '@angular/core';
import ProductListItems from './products.json';

interface Product {
  productName : string;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class AppProductList {
  products: Product[] = ProductListItems;
}
