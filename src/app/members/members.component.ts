import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../service/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  message: string | undefined;
  username:boolean=false;

  constructor(private membersService:MembersService,
               private router:Router         
   ){}

 members: Member[] = [];
 // [
 //   new Todo(1,'have to getLocaleEraNames',false,new Date()),
 //   new Todo(2,'have to kick',false,new Date()),
 //   new Todo(3,'get ready',true,new Date())
 // ]

   ngOnInit(){
      this.refreshMembers();
   }
   

   update(id:number){
     this.router.navigate(['update',id])
   }

   delete(id:number){
     this.membersService.deleteMember(id).subscribe(
       response=>{
         this.message=`Record ${id} deleted successfully`,
         this.refreshMembers()

       }
     )
   }

   refreshMembers(){
     this.membersService.getAllMembers().subscribe(
       
       response=> {
         console.log(response);
         this.members=response;
       },
       error=>{
console.log("Namaskara");
       }
       
     )
   }

   save(id:number){
     this.router.navigate(['update',id])
   }
 
}


export class Member{

 constructor(
   @Inject('id') public id: number,
   @Inject('Name')public name: string,
   @Inject('Adress')public adress:string,
   public mobileNumber:number
 ){
   
 }

}
