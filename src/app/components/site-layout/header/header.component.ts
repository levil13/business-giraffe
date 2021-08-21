import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactsDialogComponent} from "../../dialogs/contacts-dialog/contacts-dialog.component";
import {MediaService} from "../../../services/media.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isContactsPopoverVisible: boolean;
  public isMenuOpened: boolean;

  @Output()
  public menuToggle: EventEmitter<boolean> = new EventEmitter();

  constructor(private dialog: MatDialog,
              private cdr: ChangeDetectorRef,
              private asyncPipe: AsyncPipe,
              public mediaService: MediaService) {
  }

  public onContactsNavClick(): void {
    this.isContactsPopoverVisible = true;
    this.cdr.detectChanges();
    const dialogViewOptions = {
      width: this.asyncPipe.transform(this.mediaService.media$)?.isMobile ? '100vw' : undefined,
      maxWidth: this.asyncPipe.transform(this.mediaService.media$)?.isMobile ? '100vw' : undefined,
      position: {top: this.asyncPipe.transform(this.mediaService.media$)?.isMobile ? '0' : undefined}
    }

    const dialogRef = this.dialog.open(ContactsDialogComponent, Object.assign({}, {panelClass: 'dialog'}, dialogViewOptions));

    dialogRef.afterClosed().subscribe(() => {
      this.isContactsPopoverVisible = false;
      this.cdr.detectChanges();
    });
  }

  public onMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
    this.menuToggle.emit(this.isMenuOpened);
  }
}
