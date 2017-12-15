import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';

import { AppComponent } from './app.component';
import {UserModule} from "./routes/user/user.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppContextService} from "./core/app-context/app-context.service";
import {RoutesModule} from "./routes/routes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule, // required for ng2-tag-input
    RouterModule,
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){    // Create global Service Injector.
    AppContextService.injector = this.injector;
  }
}
