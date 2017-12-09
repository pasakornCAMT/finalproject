import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductDataDbService} from '../../service/product-data-db.service';
import {Router} from '@angular/router';
import {ProductDataServerService} from "../../service/product-data-server.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productDataDbService: ProductDataDbService, private router: Router) { }

  ngOnInit() {
    this.productDataDbService.getProductsData().subscribe(products => this.products = products);
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.id])
  }

}