import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe
    (response => this.products = response)
  }

}
