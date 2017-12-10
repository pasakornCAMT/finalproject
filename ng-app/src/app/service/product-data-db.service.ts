import { Injectable } from '@angular/core';
import {Product} from '../products/product';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class ProductDataDbService {
  constructor() { }
  products: Product[] = [{
    "id":1,
    "productId": "P-001",
    "name":"Singha",
    "description": "product1 product1 product1 product1 product1 product1 product1 product1 product1 product1",
    "price": 250,
    "image": "images/product1.jpg",
    "show": true
  },{
    "id":2,
    "productId": "P-002",
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg",
    "show": true
  },{
    "id":3,
    "productId": "P-003",
    "name":"Cristal",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product3.jpg",
    "show": true
  }];
  getProductsData(){
    return Observable.create((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }
  getProduct(id:number){
    let product = this.products.find(product=>product.id === +id);
    return Observable.create((subscriber:Subscriber<Product>)=>subscriber.next(product));
  }

}
