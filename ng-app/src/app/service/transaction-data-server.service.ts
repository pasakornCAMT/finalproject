import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import {Transaction} from '../transactions/transaction';

@Injectable()
export class TransactionDataServerService {

  constructor(private http:Http) { }

  getTransactionsData(){
    return this.http.get('http://localhost:8080/transaction')
      .map(res=>res.json())
  }

  findTransaction(search:string){
    let transaction: Transaction;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search',search);
    let headers = new Headers({
      'Content-type': 'application/json'
      //, 'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    return this.http.get('http://localhost:8080/transactions/',{headers:headers,search:params})
      .map(res => res.json());
  }

}
