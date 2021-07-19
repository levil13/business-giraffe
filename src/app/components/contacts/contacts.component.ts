import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {
  @Input()
  public isPopover: boolean;

  @Input()
  public messageSubject: string;

  public formGroup: FormGroup;

  public fileToUpload: File;

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(26)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)]),
      subject: new FormControl(this.messageSubject ? `Заказ. ${this.messageSubject}` : null),
      text: new FormControl(null, [Validators.required, Validators.maxLength(500)])
    });
  }

  public getErrorMessage(control: FormControl): string | null {
    if (control?.errors?.required) {
      return 'Это поле не должно быть пустым';
    }

    if (control?.errors?.maxlength) {
      return `Это поле не может содержать больше ${control?.errors?.maxlength?.requiredLength} символов. Сейчас ${control?.errors?.maxlength?.actualLength}`;
    }

    if (control?.errors?.email) {
      return 'Электронная почта введена некорректно'
    }

    return null;
  }

  public fileUpload(event: Event) {
    this.fileToUpload = event.target && event.target['files'] && event.target['files'][0];
    this.cdr.detectChanges();
  }

  public onSubmit(form: HTMLFormElement) {
    this.formGroup.updateValueAndValidity({emitEvent: true});
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls)
        .forEach(control => control.markAsDirty());
      return;
    }
    form.submit();
  }
}
