import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SiteLayoutComponent} from "./site-layout.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AgmModule} from "../../modules/agm/agm.module";
import {ContactsModule} from "../contacts/contacts.module";
import {SharedModule} from "../../modules/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: '', component: SiteLayoutComponent, children: [
      {path: 'home', loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule)},
      {path: 'services', loadChildren: () => import('../services-page/services-page.module').then(m => m.ServicesPageModule)},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', redirectTo: '/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [SiteLayoutComponent, HeaderComponent, FooterComponent],
  imports: [AgmModule, ContactsModule, SharedModule, RouterModule.forChild(routes), MatIconModule, MatButtonModule]
})
export class SiteLayoutModule {
}
