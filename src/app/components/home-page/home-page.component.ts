import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Card} from "../../utils/interfaces";
import {Title} from "@angular/platform-browser";
import {MediaService} from "../../services/media.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  constructor(private title: Title,
              public mediaService: MediaService) {

  }

  public ngOnInit(): void {
    this.title.setTitle('Главная');
  }

  public cards: Card[] = [
    {
      title: 'Визитные карты, флаеры и листовки',
      description: 'Одним из главных атрибутов делового человека,\n' +
        '           отражающего его имидж, является визитная карточка или просто визитка. Этот важнейший элемент, несущий в себе\n' +
        '           краткую необходимую информацию о владельце, значительно упрощает обмен деловой информацией и контактами.\n' +
        '           \n\n' +
        '           Поэтому срочная печать визиток - самая востребованная полиграфическая услуга на сегодняшний день. Сегодня\n' +
        '           каждый клиент, будь-то отдельный бизнесмен или огромная корпорация, могут заказать и получить визитную\n' +
        '           карточку с индивидуальным и уникальным дизайном по доступной стоимости.',
      shortDescription: 'Одним из главных атрибутов делового человека,\n' +
        '           отражающего его имидж, является визитная карточка или просто визитка. Этот важнейший элемент, несущий в себе\n' +
        '           краткую необходимую информацию о владельце, значительно упрощает обмен деловой информацией и контактами.',
      image: 'business-cards-img.jpg',
      bgImage: 'business-cards-bg.jpg'
    },
    {
      title: 'Широкоформатная печать',
      description: 'Широкоформатная печать - это печать изделий высокого разрешения до формата А0 на широкоформатном принтере\n' +
        '          или\n' +
        '          плоттере. Широкоформатная печать востребована в маркетинговой и рекламной сфере, архитектуре и дизайне.\n' +
        '          Преимущество широкоформатной печати - реалистичная цветопередача и предельная точность.',
      shortDescription: 'Широкоформатная печать - это печать изделий высокого разрешения до формата А0 на широкоформатном принтере\n' +
        '          или\n' +
        '          плоттере. Широкоформатная печать востребована в маркетинговой и рекламной сфере, архитектуре и дизайне.\n' +
        '          Преимущество широкоформатной печати - реалистичная цветопередача и предельная точность.',
      image: 'print-img.jpg',
      bgImage: 'print-bg.jpg'
    },
    {
      title: 'Услуги дизайна',
      description: 'Вы хотите, чтобы Вас знали, доверяли, выделяли?\n' +
        '           Создайте правильный корпоративный образ и перенесите его на печатную продукцию.\n' +
        '           \n' +
        '           В этом вам помогут наши дизайнеры: от идеи до ее воплощения в жизнь. Богатый опыт и собственное\n' +
        '           многофункциональное оборудование, позволяют реализовать самые смелые, неординарные дизайнерские решения.',
      shortDescription: 'Вы хотите, чтобы Вас знали, доверяли, выделяли?\n' +
        '           Создайте правильный корпоративный образ и перенесите его на печатную продукцию.\n' +
        '           \n' +
        '           В этом вам помогут наши дизайнеры: от идеи до ее воплощения в жизнь. Богатый опыт и собственное\n' +
        '           многофункциональное оборудование, позволяют реализовать самые смелые решения.',
      image: 'design-service-img.jpg',
      bgImage: 'design-service-bg.jpg'
    },
  ]
}
