import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SiteLayoutComponent} from "./components/site-layout/site-layout.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {ServicesPageComponent} from "./components/services-page/services-page.component";

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'home', component: HomePageComponent},
      {path: 'services', component: ServicesPageComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
