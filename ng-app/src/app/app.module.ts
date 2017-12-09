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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    ProductListComponent,
    NavigationComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    ProductRoutingModule,
    AppRoutingModule
  ],
  providers: [
    {provide:ProductDataDbService, useClass: ProductDataServerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
