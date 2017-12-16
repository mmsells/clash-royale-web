import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {IndexComponent} from "./index/index.component";


const routes: Routes = [
  {path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent
  ],
  exports: [
    RouterModule,
    IndexComponent
  ]
})
export class IndexModule {

}
