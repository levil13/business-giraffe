import {NgModule} from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {DialogsModule} from "./components/dialogs/dialogs.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DialogsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
