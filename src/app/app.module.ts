import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxTimelineLibModule} from "ngx-timeline-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxTimelineLibModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
