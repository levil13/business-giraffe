import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteLayoutComponent implements AfterViewInit {

  @ViewChild('headerWrapper')
  private headerWrapper: ElementRef;

  constructor(private zone: NgZone,
              private renderer: Renderer2) {
  }

  public ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('_is-pinned', e.intersectionRatio < 1),
        {threshold: [0, 1]}
      );

      observer.observe(this.headerWrapper.nativeElement);
    })
  }

  public onMenuToggle(isOpened: boolean) {
    if (isOpened) {
      this.renderer.addClass(this.headerWrapper.nativeElement, '_w-70');
    } else {
      this.renderer.removeClass(this.headerWrapper.nativeElement, '_w-70');
    }
  }
}
