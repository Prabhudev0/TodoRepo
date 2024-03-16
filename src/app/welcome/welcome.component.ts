import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  public isWelcome:boolean=false;

  ngOnInit(){
    this.isWelcome==true;
  }

}
