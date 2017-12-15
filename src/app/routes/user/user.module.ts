import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: 'user', component: UserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    UserComponent
  ],
  exports: [
    RouterModule,
    UserComponent
  ]
})
export class UserModule {

}
