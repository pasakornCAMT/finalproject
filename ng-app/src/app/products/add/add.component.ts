import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductDataDbService} from '../../service/product-data-db.service';
import {Router} from '@angular/router';
import {Product} from '../product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: any = {};
  constructor(private productDataDbService: ProductDataDbService, private router: Router) { }

  ngOnInit() {
    this.product = new Product();
  }

  //@ViewChild('fileInput') inputEl: ElementRef;

  /*addProduct(product: Product){
    let result: Product;
    console.log(this.product);
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.productDataDbService.addProduct(product,inputEl.files.item(0))
      .subscribe(resultProduct =>{
        result = resultProduct;
        if(result != null){
          this.router.navigate(['/list']);
        }else {
          alert('Errorin adding the product');
        }
    })
  }*/

}
