import {NgModule} from '@angular/core';
import {MatCarouselModule} from "@ngbmodule/material-carousel";

@NgModule({
  declarations: [],
  imports: [MatCarouselModule.forRoot()],
  exports: [MatCarouselModule]
})
export class CarouselModule {
}
