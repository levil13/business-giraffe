import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {SiteLayoutComponent} from './components/site-layout/site-layout.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ServicesPageComponent} from './components/services-page/services-page.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {HeaderComponent} from './components/site-layout/header/header.component';
import {LogoComponent} from './components/base-components/logo/logo.component';
import {ButtonComponent} from './components/base-components/button/button.component';
import {AgmModule} from "./modules/agm/agm.module";
import {CarouselModule} from "./modules/carousel/carousel.module";
import {ContactsDialogComponent} from './components/dialogs/contacts-dialog/contacts-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CardDialogComponent} from './components/dialogs/card-dialog/card-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {CardComponent} from './components/home-page/card/card.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    HomePageComponent,
    ServicesPageComponent,
    ContactsComponent,
    HeaderComponent,
    LogoComponent,
    ButtonComponent,
    ContactsDialogComponent,
    CardDialogComponent,
    CardComponent
  ],
  imports: [
    AgmModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
