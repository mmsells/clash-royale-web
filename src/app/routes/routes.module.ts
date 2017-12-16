// import { AppRouterListener } from './../core/app-router-listener/app-router-listener.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import {UserModule} from "./user/user.module";
import {IndexModule} from "./index/index.module";

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    IndexModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class RoutesModule {
    //constructor(tr: TranslatorService, appRouterListener: AppRouterListener) {
  //}
}
