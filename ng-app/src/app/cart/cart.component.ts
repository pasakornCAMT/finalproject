import { Component, OnInit } from '@angular/core';
import {Product} from '../products/product';
import {Router} from '@angular/router';
import {ProductDataServerService} from '../service/product-data-server.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  constructor(private productDataServerService: ProductDataServerService, private router: Router) { }

  ngOnInit() {
    this.productDataServerService.getProductsData().subscribe(products => this.products = products);
  }

  checkout(products:Product[]){
    this.router.navigate(['/confirmation',products])
  }

  removeSelected(product:Product){
    product.selected = false;
    this.productDataServerService.updateProduct(product).subscribe((product)=>{
      console.log(product);
    })
  }

}
