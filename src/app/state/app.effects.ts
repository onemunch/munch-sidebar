// src/app/store/effects/app.effects.ts
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import * as appActions from './app.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainService } from '../modules/shared/services/main/main.service';

@Injectable()
export class AppEffects {
//   startLoading$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(appActions.startLoading),
//       mergeMap(() => {
//         return this.someService.someAsyncOperation()
//         .pipe(
//           map(response => appActions.stopLoading()), // Dispatch stopLoading on success
//           catchError(() => EMPTY) // or dispatch a different action on error
//         );
//       })
//     )
//   );

//   // Effect for handling showModal action
//   showModal$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(appActions.showModal),
//       mergeMap(() => {
//         // You can perform any synchronous or asynchronous operations here
//         // For example, show a modal dialog using a service
//         this.modalService.showModal();
//         return EMPTY; // Effects typically don't dispatch further actions
//       })
//     )
//   );

//   // Effect for handling setNotification action
//   setNotification$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(appActions.setNotification),
//       mergeMap(({ message }) => {
//         // Perform any asynchronous or synchronous operations
//         // For example, show a notification using a service
//         this.notificationService.showNotification(message);
//         return EMPTY;
//       })
//     )
//   );

//   // Other effects can be added similarly for the remaining actions

//   constructor(
//     private actions$: Actions,
//     private mainService: MainService, // Inject your services as needed
//   ) {}
}
