import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('arrow_back', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-back.svg'));
    iconRegistry.addSvgIcon('arrow_forward', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-forward.svg'));
    iconRegistry.addSvgIcon('viber', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/viber.svg'));
    iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/whatsapp.svg'));
  }

  ngOnInit(): void {
    AOS.init();
  }
}
