import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductDataDbService} from '../../service/product-data-db.service';
import {Router} from '@angular/router';
import {ProductDataServerService} from "../../service/product-data-server.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productDataServerService: ProductDataServerService, private router: Router) { }

  ngOnInit() {
    this.productDataServerService.getProductsData().subscribe(products => this.products = products);
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.id])
  }

  search:string;
  onSearch(){
    this.productDataServerService.findProduct(this.search)
      .subscribe(
        products => this.products = products
        ,(error) => {
           if (error.status === 401){
          //   this.router.navigate(['login'],{queryParams:{source:'student'}});
           }
        })
  }



}
