import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Card} from "../../../utils/interfaces";
import {ContactsDialogComponent} from "../contacts-dialog/contacts-dialog.component";

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Card,
              public dialogRef: MatDialogRef<CardDialogComponent>,
              private dialog: MatDialog) {
  }

  public onOrderClick() {
    this.dialog.open(ContactsDialogComponent, {panelClass: 'dialog', data: this.data.title});
    this.dialogRef.close();
  }
}
