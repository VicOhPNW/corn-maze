import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { CharDesignComponent } from './char-design/char-design.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StoryComponent } from './story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharDesignComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
