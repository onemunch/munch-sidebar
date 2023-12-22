import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const primeNgModules:Type<any>[]=[
  ProgressSpinnerModule,
  DialogModule
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
