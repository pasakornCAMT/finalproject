import { Component, OnInit } from '@angular/core';
import {ProductDataServerService} from '../service/product-data-server.service';
import {Router} from '@angular/router';
import {Product} from '../products/product';

@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.css']
})
export class HotProductComponent implements OnInit {
  products: Product[];
  constructor(private productDataServerService: ProductDataServerService, private router: Router) { }

  ngOnInit() {
    this.productDataServerService.getProductsData().subscribe(products => this.products = products);
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.id])
  }
  addToCart(product:Product){
    product.selected = true;
    product.clicked = product.clicked+1;
    this.productDataServerService.updateProduct(product).subscribe((product)=>{
      console.log(product);
    })
    alert("Product "+product.id+", "+product.name+" Added")
  }

}
