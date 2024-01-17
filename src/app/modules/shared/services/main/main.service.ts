import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';


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
  sidebarVisible:boolean = false;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.localData$ = this.store.select(selectLocalData);
  }

  startLoading() {
    this.store.dispatch(appActions.START_LOADING());
  }

  stopLoading() {
    this.store.dispatch(appActions.STOP_LOADING());
  }

  fetchLocalData(){
    this.store.dispatch(appActions.FETCH_LOCAL_STORAGE());
  }

  getLocalItem(item:string){
    return localStorage.getItem(item);
  }

  getLocalData(){
    return {
      isStaticSidebar: (localStorage.getItem("isStaticSidebar") == "true")
    };
  }

  setLocalData(localData:[string[]]){
    for (let x = 0; x < localData.length; x++) {
      const tagValRef = localData[x];
      localStorage.setItem(tagValRef[0], tagValRef[1]);
    }
  }

}
