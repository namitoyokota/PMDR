import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdTimerModule } from 'angular-cd-timer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
