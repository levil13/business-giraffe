import {NgModule} from '@angular/core';
import {MatCarouselModule} from "ng-mat-carousel";

@NgModule({
  imports: [MatCarouselModule.forRoot()],
  exports: [MatCarouselModule]
})
export class CarouselModule {
}
