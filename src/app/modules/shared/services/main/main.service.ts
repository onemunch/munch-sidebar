import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import * as appActions from './../../../../state/app.actions';
import { selectIsLoading } from '../../../../state/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  isLoading$: Observable<boolean>;
  sidebarVisible:boolean = true;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  startLoading() {
    this.store.dispatch(appActions.START_LOADING());
  }

  stopLoading() {
    this.store.dispatch(appActions.STOP_LOADING());
  }

}
