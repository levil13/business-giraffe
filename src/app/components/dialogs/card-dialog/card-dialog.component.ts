import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Card} from "../../../utils/interfaces";

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Card,
              public dialogRef: MatDialogRef<CardDialogComponent>) {
  }

  public onOrderClick() {
    this.dialogRef.close(this.data.title);
  }
}
