import { Store } from '@ngrx/store';
import { EventEmitter, Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import * as appActions from './../../../../state/app.actions';
import { selectIsLoading, selectLocalData } from '../../../../state/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  isLoading$: Observable<boolean>;
  localData$: Observable<any>;
  sidebarVisible: boolean = false;
  screenWidth: number = 0;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.localData$ = this.store.select(selectLocalData);
    this.addResizeListener();
  }

  startLoading() {
    this.store.dispatch(appActions.START_LOADING());
  }

  stopLoading() {
    this.store.dispatch(appActions.STOP_LOADING());
  }

  fetchLocalData() {
    this.store.dispatch(appActions.FETCH_LOCAL_STORAGE());
  }

  adjustScreenSize() {
    this.store.dispatch(appActions.ADJUST_SCREEN_SIZE());
  }

  getLocalItem(item: string) {
    return localStorage.getItem(item);
  }

  getLocalData() {
    const ld = {
      isStaticSidebar: localStorage.getItem("isStaticSidebar") === "true",
      screenWidth: localStorage.getItem("screenWidth"),
      isMobile: localStorage.getItem("isMobile") === "true"
    };

    return Object.values(ld).every(val => val !== null && val !== undefined) ? ld : null;
  }

  setLocalData(localData: [string, string][]) {
    for (let x = 0; x < localData.length; x++) {
      const tagValRef = localData[x];
      localStorage.setItem(tagValRef[0], tagValRef[1]);
    }
  }

  checkIfMobile(): boolean {
    const userAgent: string = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(userAgent);
  }

  private addResizeListener(): void {
    window.addEventListener('resize', () => {
      this.adjustScreenSize();
    });
  }


}
