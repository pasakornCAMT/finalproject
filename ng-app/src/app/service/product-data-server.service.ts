import { Injectable } from '@angular/core';
import {Product} from "../products/product";
import "rxjs/add/operator/mergeMap";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ProductDataServerService {

  constructor(private http:Http) { }

  getProductsData(){
    let productArray: Product[];
    return this.http.get('http://localhost:8080/product')
      .map(res=>res.json());
  }

  getProduct(id:number){
    let product:Product;
    return this.http.get('http://localhost:8080/product/'+id)
      .map((res:Response)=>{
      if(res){
        if(res.status === 200){
          return res.json();
        }
        if(res.status === 204){
          return null;
        }
      }
      });
  }
  addProduct(product: Product,file:any):Observable<Product>{
    const formData = new FormData();
    let fileName: string;
    formData.append('file',file);
    return this.http.post('http://localhost:8080/upload',formData)
      .flatMap(filename => {
        product.image = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(product);
        return this.http.post('http://localhost:8080/product',body,options)
          .map(res =>{
            return res.json()
          })
      })
  }

}
