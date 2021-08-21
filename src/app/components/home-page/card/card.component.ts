import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Card} from "../../../utils/interfaces";
import {MediaService} from "../../../services/media.service";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input()
  public card: Card;

  @Input()
  public reverseView: boolean;

  constructor(private router: Router,
              public mediaService: MediaService) {
  }

  public onExamplesButtonClick(): void {
    this.router.navigate(['/services']);
  }
}
