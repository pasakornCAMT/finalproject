import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authen:AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  hasRole(role:String){
    return this.authen.hasRole(role)
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  goToLogout(){
    this.authen.logout();
    this.router.navigate(['/login'])

  }



}
