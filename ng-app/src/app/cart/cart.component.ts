import { Component, OnInit } from '@angular/core';
import {Product} from '../products/product';
import {Router} from '@angular/router';
import {ProductDataServerService} from '../service/product-data-server.service';
import has = Reflect.has;
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  constructor(private productDataServerService: ProductDataServerService, private router: Router ,private authen :AuthenticationService) { }

  ngOnInit() {
    this.productDataServerService.getProductsData().subscribe(products => this.products = products);
  }

  checkout(products:Product[]){
   if (this.authen.hasRole("CUSTOMER"))
    this.router.navigate(['/confirmation',products])
    else
      this.router.navigate(['/login'])
  }

  removeSelected(product:Product){
    product.selected = false;
    this.productDataServerService.updateProduct(product).subscribe((product)=>{
      console.log(product);
    })
  }

}
