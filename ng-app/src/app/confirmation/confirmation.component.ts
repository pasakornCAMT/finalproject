import { Component, OnInit } from '@angular/core';
import {Product} from '../products/product';
import {Router} from '@angular/router';
import {ProductDataServerService} from '../service/product-data-server.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  products: Product[];
  constructor(private productDataServerService: ProductDataServerService, private router: Router) { }

  ngOnInit() {
    this.productDataServerService.getProductsData().subscribe(products => this.products = products);
  }

  goToSlipPayment(product:Product){
    this.router.navigate(['/slip'])
  }
  goToPaypalPayment(product:Product){
    this.router.navigate(['/paypal'])
  }


}
