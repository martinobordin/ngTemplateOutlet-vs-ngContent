import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NestedContentComponent } from './nested-content/nested-content.component';
import { PowerContentComponent } from './power-content/power-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NestedContentComponent,
    PowerContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
