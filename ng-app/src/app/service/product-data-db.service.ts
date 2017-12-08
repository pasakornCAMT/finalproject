import { Injectable } from '@angular/core';
import {Product} from '../products/product';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class ProductDataDbService {
  constructor() { }
  products: Product[] = [{
    "id":1,
    "name":"Singha",
    "description": "product1 product1 product1 product1 product1 product1 product1 product1 product1 product1",
    "price": 250,
    "image": "images/product1.jpg"
  },{
    "id":2,
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg"
  },{
    "id":3,
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg"
  },{
    "id":4,
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg"
  },{
    "id":5,
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg"
  }, {
    "id":6,
    "name":"Nestle",
    "description": "product2 product2 product2 product2 product2 product2 product2 product2 product2 product2",
    "price": 250,
    "image": "images/product2.jpg"
  }];
  getProductsData(){
    return Observable.create((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }
  getProduct(id:number){
    let product = this.products.find(product=>product.id === +id);
    return Observable.create((subscriber:Subscriber<Product>)=>subscriber.next(product));
  }
  addProduct(product:Product){
    console.log(product);
    product.id = this.products.length+1;
    this.products.push(product);
    console.log(this.products);
  }

}
