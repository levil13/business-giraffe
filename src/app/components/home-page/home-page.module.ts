import {CarouselModule} from "../../modules/carousel/carousel.module";
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../modules/shared.module";

import {CardComponent} from "./card/card.component";
import {HomePageComponent} from "./home-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [
    CardComponent,
    HomePageComponent
  ],
  imports: [
    CarouselModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomePageModule {
}
