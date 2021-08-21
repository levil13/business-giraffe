import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "./logo/logo.component";
import {ButtonComponent} from "./button/button.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [LogoComponent, ButtonComponent],
  imports: [CommonModule, MatProgressSpinnerModule, RouterModule],
  exports: [LogoComponent, ButtonComponent]
})
export class BaseComponentsModule {
}
