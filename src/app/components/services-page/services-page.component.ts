import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Card} from "../../utils/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {CardDialogComponent} from "../dialogs/card-dialog/card-dialog.component";
import {ContactsDialogComponent} from "../dialogs/contacts-dialog/contacts-dialog.component";

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPageComponent {
  public cards: Card[] = [
    {
      title: 'Визитные карты',
      image: 'business-cards-img.jpg',
      exampleImages: ['business-cards-img.jpg', 'design-service-img.jpg', 'print-img.jpg']
    },
    {
      title: 'Листовки',
      image: 'design-service-img.jpg',
      exampleImages: ['business-cards-img.jpg', 'design-service-img.jpg', 'print-img.jpg']
    },
    {
      title: 'Флаеры',
      image: 'print-img.jpg',
      exampleImages: ['business-cards-img.jpg', 'design-service-img.jpg', 'print-img.jpg']
    },
    {
      title: 'Буклеты',
      image: 'business-cards-img.jpg',
      exampleImages: ['business-cards-img.jpg', 'design-service-img.jpg', 'print-img.jpg']
    },
    {
      title: 'Широкоформатная печать',
      image: 'print-img.jpg',
      exampleImages: ['business-cards-img.jpg', 'design-service-img.jpg', 'print-img.jpg'],
      class: '_w-100 _m-b0'
    }
  ];

  constructor(private dialog: MatDialog) {

  }

  public onCardClick(card: Card) {
    const dialogRef = this.dialog.open(CardDialogComponent, {panelClass: 'dialog', data: card});

    dialogRef.afterClosed()
      .subscribe((cardTitle) => {
        if (cardTitle) {
          this.dialog.open(ContactsDialogComponent, {panelClass: 'dialog', data: cardTitle})
        }
      });
  }
}
