import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  @Input()
  public logoClass: string;

}
