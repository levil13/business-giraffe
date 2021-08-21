import {Injectable} from "@angular/core";
import {fromEvent, ReplaySubject, Subject} from "rxjs";
import {Constants} from "../utils/constants";
import {debounceTime, takeUntil} from "rxjs/operators";
import {Media} from "../utils/interfaces";

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  public media$: Subject<Media> = new ReplaySubject<Media>(1);
  public unsubscribe$: Subject<void> = new Subject();

  public initResizeWatcher() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(100), takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.updateMedia();
      });
  }

  public updateMedia() {
    this.media$.next({
      isMobile: document.body.offsetWidth <= Constants.MAX_PHONE_SCREEN_SIZE,
      isDesktop: document.body.offsetWidth > Constants.MAX_PHONE_SCREEN_SIZE
    });
  }

  public destroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.media$.complete();
  }
}
