import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BootstrapModalModule } from "ngx-bootstrap-modal";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
