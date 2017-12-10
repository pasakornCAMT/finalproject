import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
