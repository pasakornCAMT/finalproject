import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductDataDbService} from '../../service/product-data-db.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productDataDbService:ProductDataDbService) { }
  product: Product;
  isNoData:boolean;
  inputCount: number;
  ngOnInit() {
    this.isNoData = false;
    this.inputCount = 15;
    this.route.params
      .switchMap((params:Params)=> this.productDataDbService.getProduct(+params['id']))
      .subscribe((product:Product)=>{
      if(this.product !== null)
        this.product = product;
      else
        this.isNoData = true;
    })
  }

}
