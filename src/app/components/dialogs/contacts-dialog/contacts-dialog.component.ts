import {ChangeDetectionStrategy, Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Card} from "../../../utils/interfaces";

@Component({
  selector: 'app-contacts-dialog',
  templateUrl: './contacts-dialog.component.html',
  styleUrls: ['./contacts-dialog.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {

  }
}
