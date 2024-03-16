import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Member } from '../members/members.component';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }

  getAllMembers(){

    //  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    //   let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

     return  this.http.get<Member[]>('http://localhost:8080/getMembers'
    //  ,{headers}
     );
  }

  deleteMember(id:number){
    return this.http.delete(`http://localhost:8080/deleteMember/${id}`);
  }

  getById(id:number){
    return this.http.get<Member>(`http://localhost:8080/getMembers/${id}`);
  }

  updateTodo(id:number,member:Member){
    return this.http.put(`http://localhost:8080/updateMembers/${id}`,member);
  }

  saveTodo(member:Member){
    return this.http.post(`http://localhost:8080/addMember`,member);
  }


  //   createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
