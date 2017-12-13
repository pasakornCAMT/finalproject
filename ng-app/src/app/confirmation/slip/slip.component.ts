import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from '../../transactions/transaction';
import {TransactionDataServerService} from '../../service/transaction-data-server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css']
})
export class SlipComponent implements OnInit {
  transaction:any={};

  constructor(private transactionDataServerService: TransactionDataServerService, private router: Router) { }

  ngOnInit() {
    this.transaction = new Transaction();
  }
  @ViewChild('fileInput') inputEl: ElementRef;

  addTransaction(transaction: Transaction){
    this.transaction.payment = 'slip';
    let result: Transaction;
    console.log(this.transaction);
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.transaction.show = true;
    this.transactionDataServerService.addTransaction(transaction,inputEl.files.item(0))
      .subscribe(resultTransaction =>{
        result = resultTransaction;
        if(result != null){
          this.router.navigate(['/list']);
        }else {
          alert('Error in adding the transaction');
        }
      })
  }

  onFileChangeTransaction(event,transaction: any){
    var filename = event.target.files[0].name;
    console.log(filename);
    this.transaction.image = filename;
  }

}
