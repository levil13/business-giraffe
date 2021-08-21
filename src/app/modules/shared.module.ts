import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {BaseComponentsModule} from "../components/base-components/base-components.module";


@NgModule({
  providers: [AsyncPipe],
  imports: [CommonModule, BaseComponentsModule],
  exports: [CommonModule, BaseComponentsModule],
})
export class SharedModule {
}
