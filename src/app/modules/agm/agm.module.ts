import {NgModule} from '@angular/core';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [],
  imports: [AgmCoreModule.forRoot({apiKey: 'AIzaSyBsjmSaqepuwn7WXx0900y0ObFaQCICJvg'})],
  exports: [AgmCoreModule]
})
export class AgmModule {
}
