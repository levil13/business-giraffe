import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  public text: string;

  @Input()
  public buttonClass: string;

  @Input()
  public disabled: boolean;

  @Input()
  public isLoading: boolean;

  @Input()
  public buttonType: 'button' | 'submit' | 'reset' = 'button';

  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter();
}
