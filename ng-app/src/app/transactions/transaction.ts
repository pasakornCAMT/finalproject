import {Product} from '../products/product';

export class Transaction {
  id:number;
  date:string;
  payment:string;
  image: string;
  productList?:Product[];
}
