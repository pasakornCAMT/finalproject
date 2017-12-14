import { Component, OnInit } from '@angular/core';
import {ActorDataServerService} from "../../service/actor-data-server.service";
import {Router} from "@angular/router";
import {Actor} from "../actor";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors:Actor[];
  searchText:string;
  constructor(private actorDataServerService: ActorDataServerService, private router: Router ) { }

  ngOnInit() {
    this.actorDataServerService.getActorsData()
      .subscribe(actors => this.actors = actors,
        (error) =>{
          if (error.status === 401){
            this.router.navigate(['login'],{queryParams:{source:'actor'}});
          }
        });
  }
  deleteActor(actor:Actor){
    actor.active = false;
    this.actorDataServerService.deleteActor(actor.id).subscribe((actor)=>{
      this.actors.splice(this.actors.indexOf(actor),1);
    })
  }
  onSearchName(){
    this.actorDataServerService.findActors(this.searchText)
      .subscribe(
        actors => this.actors = actors
        ,(error) => {
          if (error.status === 401){
            //error
          }
        })
  }
  onSearchUserName(){
    this.actorDataServerService.findActorsUsername(this.searchText)
      .subscribe(
        actors => this.actors = actors
        ,(error) => {
          if (error.status === 401){
            //error
          }
        })
  }

}
