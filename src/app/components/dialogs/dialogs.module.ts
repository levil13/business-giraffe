import {CarouselModule} from "../../modules/carousel/carousel.module";
import {ContactsModule} from "../contacts/contacts.module";
import {MatDialogModule} from "@angular/material/dialog";
import {NgModule} from '@angular/core';
import {SharedModule} from "../../modules/shared.module";

import {CardDialogComponent} from "./card-dialog/card-dialog.component";
import {ContactsDialogComponent} from "./contacts-dialog/contacts-dialog.component";

@NgModule({
  declarations: [
    CardDialogComponent,
    ContactsDialogComponent
  ],
  imports: [
    CarouselModule,
    ContactsModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [
    CardDialogComponent,
    ContactsDialogComponent
  ]
})
export class DialogsModule {
}
