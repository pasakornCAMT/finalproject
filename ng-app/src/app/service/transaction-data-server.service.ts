import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, Response, RequestOptions} from "@angular/http";
import {Transaction} from '../transactions/transaction';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

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
  findTransactionPayment(search:string){
    let transaction: Transaction;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search',search);
    let headers = new Headers({
      'Content-type': 'application/json'
      //, 'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
    return this.http.get('http://localhost:8080/transactions-payment/',{headers:headers,search:params})
      .map(res => res.json());
  }

  getTransaction(id:number){
    let transaction:Transaction;
    return this.http.get('http://localhost:8080/transaction/'+id)
      .map((res:Response)=>{
      if(res.status === 200){
        return res.json();
      }
      if(res.status === 204){
        return null;
      }
      });
  }

  addTransaction(transaction: Transaction,file:any):Observable<Transaction>{
    const formData = new FormData();
    let fileName: string;
    formData.append('file',file);
    return this.http.post('http://localhost:8080/upload',formData)
      .flatMap(filename => {
        transaction.image = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(transaction);
        return this.http.post('http://localhost:8080/transaction',body,options)
          .map(res =>{
            return res.json()
          })
      })
  }

}
