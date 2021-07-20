import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Constants} from "../../utils/constants";

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

  @ViewChildren('errorMessageText')
  private errorMessagesTexts: QueryList<ElementRef>;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.formGroup.get('file')?.patchValue(file);
    this.cdr.detectChanges();
  }

  public formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private cdr: ChangeDetectorRef,
              private renderer: Renderer2) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(26)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(255)]),
      subject: new FormControl(this.messageSubject ? `Заказ. ${this.messageSubject}` : null),
      text: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      file: new FormControl(null, this.fileValidator)
    });
  }

  private fileValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const file: File = control.value;
    if (!control.value) {
      return null;
    }

    if (file.size > Constants.FILE_MAX_SIZE_BYTES) {
      control.markAsDirty();
      return {'maxFileSize': true};
    }

    const isValidExtension = Constants.FILE_EXTENSIONS.some(ext => file.name.indexOf(ext) !== -1);
    const isValidType = Constants.FILE_TYPES.includes(file.type);

    if (!isValidExtension && !isValidType) {
      control.markAsDirty();
      return {'fileType': true};
    }

    return null;
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

    if (control?.errors?.maxFileSize) {
      return `Недопустимый размер файла. Максимальный размер - ${Constants.FILE_MAX_SIZE_MB} мб. \n Ваш файл имеет размер - ${(control?.value?.size / 1024 / 1024).toFixed(2)} мб`
    }

    if (control?.errors?.fileType) {
      return `Неверный тип файла. Допустимые типы: ${Constants.FILE_EXTENSIONS.join(', ')}`
    }

    return null;
  }

  public onSubmit(form: HTMLFormElement) {
    this.formGroup.updateValueAndValidity({emitEvent: true});
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls)
        .forEach(control => control.markAsDirty());
      this.errorMessagesTexts.forEach(item => {
        this.renderer.removeClass(item.nativeElement, 'contacts-shake');
        setTimeout(() => this.renderer.addClass(item.nativeElement, 'contacts-shake'));
      })
      return;
    }
    form.submit();
  }
}
