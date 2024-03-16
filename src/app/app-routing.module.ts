import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersComponent } from './members/members.component';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'members',component:MembersComponent},
  {path:'images',component:ImagesComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
