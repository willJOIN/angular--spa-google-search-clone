import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GoogleSearchComponent } from './google-search/google-search.component';
import { FeelingLuckyComponent } from './feeling-lucky/feeling-lucky.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GoogleSearchComponent,
    FeelingLuckyComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
