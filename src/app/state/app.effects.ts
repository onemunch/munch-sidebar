import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AppActions from './app.actions';
import { EMPTY, catchError, map, mergeMap, of } from 'rxjs';
import { MainService } from '../modules/shared/services/main/main.service'

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private store: Store, private mainService: MainService) { }

  fetchLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.FETCH_LOCAL_STORAGE),
    mergeMap(() => {
      try {
        const localData = this.mainService.getLocalData();
        if (!localData) {
          const fallbackData: [string, string][] = [
              ["isStaticSidebar", "false"], 
              ["screenWidth", window.innerWidth.toString()], 
              ["isMobile", this.mainService.checkIfMobile().toString()]
            ];
          this.mainService.setLocalData(fallbackData);
          return of(AppActions.FETCHED_LOCAL_STORAGE({ data: fallbackData }));
        } else {
          return of(AppActions.FETCHED_LOCAL_STORAGE({ data: localData }));
        }
      } catch (error) {
        return EMPTY;
      }
    }),
    catchError(() => EMPTY)
  ));

  adjustScreenSize$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.ADJUST_SCREEN_SIZE),
    map(() => {
      try {
        localStorage.setItem("screenWidth", window.innerWidth.toString());
        const localData = this.mainService.getLocalData();
        return AppActions.ADJUSTED_SCREEN_SIZE({ data: localData });
      } catch (error) {
        return { type: 'NO_ACTION' }; 
      }
    }),
    catchError(() => EMPTY)
  ));
  
}
