import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
      image: 'business-cards-img.png',
      exampleImages: ['business-cards-img.png', 'design-service-img.png', 'print-img.png']
    },
    {
      title: 'Листовки',
      image: 'design-service-img.png',
      exampleImages: ['business-cards-img.png', 'design-service-img.png', 'print-img.png']
    },
    {
      title: 'Флаеры',
      image: 'print-img.png',
      exampleImages: ['business-cards-img.png', 'design-service-img.png', 'print-img.png']
    },
    {
      title: 'Буклеты',
      image: 'business-cards-img.png',
      exampleImages: ['business-cards-img.png', 'design-service-img.png', 'print-img.png']
    },
    {
      title: 'Широкоформатная печать',
      image: 'print-img.png',
      exampleImages: ['business-cards-img.png', 'design-service-img.png', 'print-img.png'],
      class: '_w-100 _m-b0'
    }
  ];

  constructor(private dialog: MatDialog) {

  }

  public onCardClick(card: Card) {
    this.dialog.open(CardDialogComponent, {panelClass: 'dialog', data: card});
  }

  public onOrderClick() {
    this.dialog.open(ContactsDialogComponent, {panelClass: 'dialog'});
  }
}
