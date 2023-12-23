// src/app/store/effects/app.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MainService } from '../modules/shared/services/main/main.service';

@Injectable()
export class AppEffects {
  

  constructor(
    private actions$: Actions,
    private mainService: MainService, 
  ) {}
}
