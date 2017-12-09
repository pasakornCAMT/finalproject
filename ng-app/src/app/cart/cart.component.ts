import { Component, OnInit } from '@angular/core';
import {Product} from '../products/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkout(products:Product[]){
    this.router.navigate(['/checkout'])
  }

}
