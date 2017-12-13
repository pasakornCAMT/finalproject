import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CommentDataServerService {

  constructor(private http:Http) { }

  getCommentsData(){
    let commentArray: Comment[];
    return this.http.get('http://localhost:8080/comment')
      .map(res=>res.json());
  }

}
