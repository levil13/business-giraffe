import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactsDialogComponent} from "../../dialogs/contacts-dialog/contacts-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isContactsPopoverVisible: boolean;

  constructor(private dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
  }

  public onContactsNavClick(): void {
    this.isContactsPopoverVisible = true;
    this.cdr.detectChanges();

    const dialogRef = this.dialog.open(ContactsDialogComponent, {panelClass: 'dialog'});
    dialogRef.afterClosed().subscribe(() => {
      this.isContactsPopoverVisible = false;
      this.cdr.detectChanges();
    });
  }
}
