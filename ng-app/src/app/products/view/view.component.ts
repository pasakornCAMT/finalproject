import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductDataDbService} from '../../service/product-data-db.service';
import 'rxjs/add/operator/switchMap';
import {ProductDataServerService} from '../../service/product-data-server.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private productDataServerService:ProductDataServerService) { }
  product: Product;
  isNoData:boolean;
  inputCount: number;
  showComment:boolean = false;
  inputComment:string;
  comment:Comment;

  ngOnInit() {
    this.isNoData = false;
    this.inputCount = 15;
    this.route.params
      .switchMap((params:Params)=> this.productDataServerService.getProduct(+params['id']))
      .subscribe((product:Product)=>{
      if(this.product !== null)
        this.product = product;
      else
        this.isNoData = true;
    })
  }
  clickComment(){
    this.showComment = true;
  }

  commentProduct(product:Product){
    this.comment = new Comment;
    this.comment.text = this.inputComment;
    product.comments.push(this.comment);
    this.productDataServerService.updateProduct(product).subscribe((product)=>{
      console.log(product);
    })
  }

}
