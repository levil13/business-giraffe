import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MediaService} from "./services/media.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private mediaService: MediaService) {
    iconRegistry.addSvgIcon('arrow_back', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-back.svg'));
    iconRegistry.addSvgIcon('arrow_forward', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-forward.svg'));
    iconRegistry.addSvgIcon('viber', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/viber.svg'));
    iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/whatsapp.svg'));
  }

  ngOnInit(): void {
    AOS.init({once: true});

    this.mediaService.updateMedia();
    this.mediaService.initResizeWatcher();
  }

  ngOnDestroy(): void {
    this.mediaService.destroy();
  }
}
