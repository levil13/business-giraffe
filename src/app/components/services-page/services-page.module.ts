import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ServicesPageComponent} from "./services-page.component";
import {SharedModule} from "../../modules/shared.module";

const routes: Routes = [
  {path: '', component: ServicesPageComponent}
];

@NgModule({
  declarations: [ServicesPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class ServicesPageModule {
}
