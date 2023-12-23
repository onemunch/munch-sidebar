import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

const primeNgModules:Type<any>[]=[
  DialogModule,
  ButtonModule,
  ProgressSpinnerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgModules

  ],
  exports: [
    ...primeNgModules
  ]
})
export class PrimeNgModule { }
