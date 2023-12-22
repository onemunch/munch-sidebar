import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './modules/primeng.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

const sharedModules:Type<any>[] = [
  PrimeNgModule
]

const sharedComponents:Type<any>[] = [
  ProgressSpinnerComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports:[
    ...sharedComponents,
    ...sharedModules
  ]
})
export class SharedModule { }
