import {NgModule} from '@angular/core';
import {ContactsComponent} from "./contacts.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../modules/shared.module";

@NgModule({
  declarations: [ContactsComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [ContactsComponent]
})
export class ContactsModule {
}
