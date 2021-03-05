import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayValuePipe } from './display-value.pipe';
import { UsesPipeComponent } from './uses-pipe/uses-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayValuePipe,
    UsesPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
