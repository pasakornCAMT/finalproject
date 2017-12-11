import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './products/add/add.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {ProductRoutingModule} from './products/product-routing.module';
import {AppRoutingModule} from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewComponent } from './products/view/view.component';
import {ProductDataDbService} from './service/product-data-db.service';
import {ProductDataServerService} from "./service/product-data-server.service";
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ManagementComponent } from './products/management/management.component';
import { UpdateComponent } from './products/update/update.component';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from './service/authentication.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SlipComponent } from './confirmation/slip/slip.component';
import { PaypalComponent } from './confirmation/paypal/paypal.component';
import { ListOfTransactionsComponent } from './transactions/list-of-transactions/list-of-transactions.component';
import {TransactionDataServerService} from './service/transaction-data-server.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    ProductListComponent,
    NavigationComponent,
    ViewComponent,
    CartComponent,
    ManagementComponent,
    UpdateComponent,
    LoginComponent,
    ConfirmationComponent,
    SlipComponent,
    PaypalComponent,
    ListOfTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductRoutingModule,
    AppRoutingModule
  ],
  providers: [
    ProductDataServerService,
    AuthenticationService,
    TransactionDataServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
